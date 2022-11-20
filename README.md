# React Click

## Overveiw
This is a sample for implementing a click button using React.  

## Environment
1, Build a basic React environment.  
$ npx create-react-app@latest react-click --template typescript  

2, Replace the src folder with the src folder of this repository.  

## Code
```TypeScript
// Output alerts when clicked
const Hello = () => {
    const onClick = () => {
        // Alert text
        alert('Hello World !')
    }
    // Button text
    const text = 'Hello React !'

    // Returns button elements with text as children
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

// Export Hello so that it can be called from the outside
export default Hello
```

## Output Sample
$ npm run start

<img width="760" alt="スクリーンショット 2022-11-20 14 56 24" src="https://user-images.githubusercontent.com/36861752/202888533-4a545a67-127f-4271-a0db-898491726142.png">

## Node.js
Install Node.js to run React.  

https://nodejs.org/en/  
 note : The stable, even version is recommended.  

Version Check  
$ node -v  

