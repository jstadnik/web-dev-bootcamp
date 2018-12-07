function printReverse(someArray)
{
    for (i = someArray.length - 1; i >= 0; i--)
    {
        console.log(someArray[i]);
    }
}

function isUniform(someArray)
{
    if (someArray.length === 0 || someArray.length === 1)
    {
        //If it has one or no elements then it's uniform by default
        return true;
    }

    for (i = 1; i < someArray.length; i++)
    {
        if (someArray[i] !== someArray[i-1])
        {
            return false;
        }
    }
    return true;
}

function sumArray(someArray)
{
    var sum = 0;
    for (i = 0; i < someArray.length; i++)
    {
        sum += someArray[i];
    }
    return sum;
}

function max(someArray)
{
    var maxValue = someArray[0];
    for (i = 0; i < someArray.length; i++)
    {
        if (someArray[i] > maxValue)
        {
            maxValue = someArray[i];
        }
    }
    return maxValue;
}
