var todoList = [];
var action = null;

function addItem()
{
    itemToAdd = prompt("What would you like to add?")
    todoList.push(itemToAdd);
}

function display()
{
    console.log(todoList)
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
    else if (action === "quit")
    {
        continue;
    }
    else
    {
        alert("Invalid action -- try again.");
    }
}
