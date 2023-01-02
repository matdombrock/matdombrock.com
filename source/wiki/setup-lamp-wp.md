<steelsky>
{
  "title":"Setting Up an Ubuntu Server For WordPress (LAMP)",
  "description":"How we used to setup LAMP way back in the day.",
  "tags":"#programming #wordpress"
}
</steelsky>
# Setting Up an Ubuntu Server For WordPress (LAMP)

*Note: This is outdated probably.*

## Update
A lot has changed in Ubuntu LAMP land since this guide was originally written. I've gone back through and updated everything as best I can for Ubuntu 20.04LTS and MySQL8 support!

## Getting Ready
Update your package list and install upgrades:
```
sudo apt update && sudo apt upgrade
```
## Install Apache
```
sudo apt install apache2
```
## Install MYSQL Server
```
sudo apt install mysql-server
```
## Configure MYSQL Server
Login to the MYSQL shell with:
```
sudo mysql -u root
```
Create a new database for WordPress:

**UPDATE**: The follwing was an acceptable shorthand command in MySQL 8 and lower. However, this shorthand is no longer possible.

**MYSQL 7**
```sql
CREATE DATABASE wordpress;
GRANT ALL ON wordpress.* TO 'wordpress' IDENTIFIED BY 'password';
```

**MYSQL 8**
```sql
CREATE DATABASE wordpress;
CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON wordpress.* TO 'wordpress'@'localhost';
```

*Make sure to set your password to something secure!*

Exit the shell:
```
quit
```

Run the MYSQL Secure Installation:
```
sudo mysql_secure_installation
```
Make sure to read each option carefully, but generally speaking you can answer yes to all in most cases.


## Install PHP

**UPDATE:** Current versions of Ubuntu (20.04LTS) will need PHP 7.4 packages.

### 18.04LTS
```
sudo apt install php7.2 libapache2-mod-php7.2 php-mysql
```

### 20.04LTS
```
sudo apt install php7.4 libapache2-mod-php7.4 php-mysql
```

### All
Also install some extra packages that might be needed by WordPress:
```
sudo apt install php-curl php-json php-cgi
```
## Finish Server Setup

### Allow Your Server Through The Firewall
```
sudo ufw allow in "Apache Full"
```
### Restart Apache
```
sudo service apache2 restart
```

## We Have LAMP
If all you really wanted was a LAMP stack and you don't really need WordPress, you can stop here!

## Install WordPress

First download the `unzip` package so that we can unzip the WordPress files we download.

```
sudo apt install unzip
```

Now download the latest WordPress release from WordPress.org

```
wget https://wordpress.org/latest.zip
```

Unzip the release 

**NOTE:** This will unzip the file into your working directory. This can really be wherever you want it to go because we will move the file soon.

```
unzip latest.zip
```

Move the newly unzipped files into the web root (`/var/www/html`).

```
mv wordpress/* /var/www/html/
```

Delete the empty `wordpress` directory inside our current working directory. 

```
rm -r wordpress
```

## Changing Permissions

In order for WordPress to run correctly, it needs to have the right file permissions in place. 

First, navigate to right above the web root:

```
cd /var/www
```

Then, let Apache be owner:

```
chown www-data:www-data  -R *
```

Change directory permissions `rwxr-xr-x`:

```
find . -type d -exec chmod 755 {} \;
```

Change file permissions `rw-r--r--`:

```
find . -type f -exec chmod 644 {} \;
```
## Conclusion

You should now have a fully function Ubuntu server running LAMP stack as well as a fully function WordPress installation. I won't go into the the full details of moving through the WordPress installer GUI but to get started just head to `<your_server_ip>/wp-admin`.