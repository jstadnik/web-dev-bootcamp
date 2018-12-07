var todoList = [];
var action = null;

function addItem()
{
    itemToAdd = prompt("What would you like to add?")
    todoList.push(itemToAdd);
    console.log("Item: \"" + itemToAdd + "\" has been added to the list");
}

function printItem(itemName, index)
{
    console.log((index+1) + ": " + itemName);
}

function display()
{
    console.log("*****************")
    todoList.forEach(printItem);
    console.log("*****************")
}

function deleteItem()
{
    var indexToDelete = prompt("Which item would you like to delete?");
    indexToDelete = Number(indexToDelete)
    var deletedName = todoList.splice(indexToDelete-1, 1);
    console.log("Item: \"" + deletedName + "\" has been removed from the list");
}

while (action !== "quit")
{
    action = prompt("What would you like to do?")
    if (action === "new")
    {
        addItem();
    }
    else if (action === "list")
    {
        display();
    }
    else if (action === "delete")
    {
        deleteItem();
    }
    else if (action === "quit")
    {
        console.log("You have quit the app");
        continue;
    }
    else
    {
        alert("Invalid action -- try again.");
    }
}
