<steelsky>
{
  "title":"Backing Up & Restoring a MySQL Database from the Command Line",
  "description":"A quick guide on using the MySQL CLI to manage your database backups.",
  "tags":"#programming #mysql",
  "type":"post",
  "date":"2019-02-01"
}
</steelsky>
# Backing Up & Restoring a MySQL Database from the Command Line

A quick guide on using the MySQL CLI to manage your database backups.

-------
### Backup
Use [MySQLDump](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html) to backup the database:
```bash
mysqldump -u [user_name] -p [database_name] > [file_name].sql
```
Where:
* [user_name] is the name of your MySQL user
* [database_name] is the name of your database
* [file_name] is the name of your output file

-------
### Restore
Use the [MySQL command line interface](https://dev.mysql.com/doc/refman/8.0/en/mysql.html) to restore from the backup you made previously:
```bash
mysql -u [user_name] -p [database_name] < [file_name].sql
```
Where:
* [user_name] is the name of your MySQL user
* [database_name] is the name of your database
* [file_name] is the name of your input file
