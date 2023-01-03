<steelsky>
{
  "title":"Using Git from the Command Line Interface",
  "description":"Git is a powerful tool that is used to track software versions and help teams collaborate on large projects. Learn how to use it.",
  "tags":"#programming #git #guide"
}
</steelsky>
# Using Git from the Command Line Interface

## Introduction
Git is a powerful tool that is used to track software versions and help teams collaborate on large projects. GitHub is an awesome website where people can share, show off and collaborate on open-source software.

Version control tools like git can be extremely useful. However, to the beginning or intermediate programmer, a tool like git can seem pretty daunting and the available tutorials all too often offer a total information overload. This text aims to get you started using GitHub from the command line in as few steps as possible.

In this tutorial we will be creating a new project (known as a repository) and uploading it to GitHub.
Here is a cheat-sheet of the commands we will use in this tutorial:
```bash
git config --global user.name "Your Name Here"

git config --global user.email "your_email@youremail.com"

echo "# EDIT ME" >> README.md

git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/XXX/ZZZ.git

git push -u origin master
```

## Setup
First let's set up your GitHub on your local machine (at this time you should have already visited GitHub.com to setup and register your account).If you have not already installed git on your machine do:
```
sudo apt install git
```

(This line assumes that you are using aptitude as your package manager and Linux as your OS. If this is not the case see [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).)

You can check that git is installed by running the command:
```
git
```
You should see a large amount of text explaining the usage of the git command. You do not need to read this at this time. If you don’t see this message or get a message that git is not installed, try the install process again.

Now lets configure your installation.
```
git config --global user.name "Your Name Here"
```
This should be the user name that you registered with on GitHub.com.

We also need to register your email on the local machine so do:
```
git config --global user.email "your_email@youremail.com"
```

Thats it. We have your local machine setup and we can get started.

## Create a README File
Now that we are connected, the thing we need to do is create a new directory for our project and enter it. So do:
```
mkdir newProject && cd newProject
```
We have a new directory in which to store our project, so lets go ahead and create out first file to go in it. Right now I will demonstrate making a 'README.md' file. While you will need to make a 'README.md' file at some point, you can make whatever file you would like at this point it does not have to be a 'README.md' file. (Side Note: the ```.md``` file type signifies MARKDOWN, a lightweight text formating syntax commonly used for writing documentation).

To create our 'README.md' file, do:
```
echo "# EDIT ME" >> README.md
```

## Initialize The Repository And Add Changes
Now that we are working with more than just an empty directory, we can initialize the repository with:
```
git init
```

This command will add the basic files required for this directory to be recoginized as a git project.

Now that the directory is initialized as a git repo, we need to add all of its files into our "master list" of files that are part of our project(repository). These are the files that will be synced up to the server when we publish our new repository.

To add everything in our current directory to the "Master List" do:
```
git add .
```

Here you could specify a particular file to add (in place of the dot) but in most cases it best to stick with the dot with indicates that we want to add *all* files.

## Commit The Changes
When we push new changes to a project (know as a commit) or add a project to GitHub for the first time, we need to write a short (or in some cases quite detailed) explanation of what we have done.
To add a memo to our "commit" do:
```
git commit -m "first commit"
```
Here the text inside the quotations can be whatever you would like it to be.

## Give The Project Somewhere To Live
Now that we have git setup and connected, a directory initialized as a git project, a file inside the directory and a memo on our first "commit", it's time to push our changes live to GitHub.

But first we need to tell this project where it is going to live. If you have not done so already, head over to GitHub.com and sign into your account. You should be a greeted by a page with 2 large buttons on it. Click the button that says "Start a Project".

Choose a name for this new project and make sure to leave the box saying "Initialize this repository with a README" unchecked if you already created a 'README.md' file.

Click on the green "Create Repository" button at the bottom of the page. On The next page you will be presented with the git URL for your new repository. You will need this in the next step, so write it down or copy paste it.

## Tell The Project Where It Lives
To tell your repository where it will "live" on GitHub do:
```
git remote add origin https://github.com/XXX/ZZZ.git
```
Where 'XXX' is the probably your username and and 'ZZZ' is the name of your repo.

## Push The Project Home
Finally, our project knows where it is going and we can send it on its way. To add your new project to GitHub use the command:
```
git push -u origin master
```
(Note: You will probably be asked to verify your GitHub credentials at this point) After following all of these steps, you should be able to see this new project under your profile at GitHub.com.
Remember, GitHub is an awesome site, but it is not the only way to use git!