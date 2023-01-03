<steelsky>
{
  "title":"Create A New WordPress Database From MYSQL CLI",
  "description":"Creating a new database for WordPress from the MYSQL command line interface is easy.",
  "tags":"#programming #wordpress #mysql"
}
</steelsky>
# Create A New WordPress Database From MYSQL CLI

<div class="archive-msg">ARCHIVED: This is for historical purposes only!</div>

Creating a new database for WordPress from the MYSQL command line interface is easy. 

**This tutorial assumes that you already have access to the MYSQL CLI and that you are somewhat familliar with it.** 

### Login to the CLI
```sql
$ mysql -u adminusername -p
```
You should be prompted to clear enter your password here.

### Create the Database
Change 'databasename' to your the name you want for your new database.
```sql
mysql> CREATE DATABASE databasename;
```
### Grant Access to the User
Change "wordpressusername" to a new or existing MYSQL username.

Change "hostname" to your host. This will probablly be "localhost".
```sql
mysql> GRANT ALL PRIVILEGES ON databasename.* TO "wordpressusername"@"hostname"
```
Hit enter and you will be brought to a new line indicated by ```->```.

Now enter your new password. Change "password" to your new password. If you are using an existing MYSQL user, you should set this to it's existing password.
```sql
IDENTIFIED BY "password";
```
### Flush Privliges & Exit
```sql
mysql> FLUSH PRIVILEGES;
```
```sql
mysql> EXIT
```
You should now be able to login to the MYSQL CLI using the user you setup and you should also be able to install WordPress to this new Database.