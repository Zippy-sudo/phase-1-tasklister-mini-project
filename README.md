
# TaskLister

TaskLister is a basic website that enables you to plan your day.

## Installation
#### Prerequisites

Make sure you are on a computer running the Ubuntu Operating System and that you have the Google-Chrome Browser installed.

### Step 1
Make sure you have git in your packages.
In your terminal type:
```bash
whereis git
```
Your terminal should display something like this if git is installed:
```bash
git: /usr/bin/git /usr/share/man/man1/git.1.gz
```
If it shows this instead
```bash
git:
``` 
please visit [Git Page] (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for a comprehensive guide on how to install git.

### Step 2
Use git to clone this repository into a folder of your choice

In your terminal type:
```bash
git clone pathTo/FolderofYour/Choice
```

be sure to replace _pathTo/FolderofYour/Choice_ with **the** path to the folder of your choice.

## Using the TaskLister
Make sure that you are in the folder into which you cloned this repository.
Your terminal should look something like this:
```bash
User:~/pathTo/FolderofYour/Choice
```
type:
```bash
google-chrome index.html
```
A new tab should open on your browser displaying:
![Screenshot of loaded Tasklister Page](/src/screenshot/Page.png)

Fill in the required fields and select the priority from the dropdown:
![Screenshot of process of creating a task](/src/screenshot/Page_demo1.png)

then click the **Create New Task** button.

Your Tasklister should display something like this:
![Screenshot of created tasks](/src/screenshot/Page_demo2.png)

**Green** Is for the least priority task/s.

**Gold** Is for the medium priority task/s.

**Red** Is for the highest priority task/s.

To delete a task simply click on the x button beside it.

_Before_
![Deleting a task](/src/screenshot/Page_demo2.png)

_After_
![Deleting a task](/src/screenshot/Page_demo3.png)


## License

[MIT](https://choosealicense.com/licenses/mit/)

