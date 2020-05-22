# MyReads App
The MyReads app allows you to search for books and add them to your bookshelf collection. You can set a status for each book on your bookshelf to indicate if you are currently reading, want to read or already have read a book.

## Installation
Before instaling MyReads, be sure you are running the latest version of node.js and have yarn or npm package manager installed.

To install MyReads:

1) clone this repository onto your local machine:
```
git clone https://github.com/jayrosen1576/react-myreads.git
```

2) Install packages required to run:
```
cd ./react-myreads && npm install
```
3) run the app using a local development server:
```
yarn start [or npm start]
```
4) You can now access the application at **http://localhost:3000**

## Features
### Dashboard
The Dashboard is the main screen and contains 3 bookshelves that store your selected books: **Currenty Reading**, **Want To Read**, and **Read**. You can move books between bookshelves by simply dragging them to the desired bookshelf or selecting the correct bookshelf using the selection tool indicated by the green arrow button.

![](drag-drop.gif)

To add a new book to your collection, click the blue + button in the lower right corner of the screen to search for new books by title or author.

### Search
Search for new books on the search screen. You can enter any title or author's name in the search field. You must enter at least 3 characters to search and the books that match will be displayed. If no titles are found, you will see a message indicating no books were found.

![](search.gif)

In addition to selecting a bookshelf for a new book, you will also see an indicator on a book if it has already been added to one of your bookshelves. The indicator will show you which bookshelf it is on if you hover over it with your mouse.

## Future Releases
We know this app may not seem like much today, but even Amazon had to start somewhere...stay tuned.

 ¯\\\_(ツ)_/¯