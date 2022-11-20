# React Click

## Overveiw
This is a sample for implementing a click button using React.  

## Environment
1, Build a basic React environment.  
$ npx create-react-app@latest react-click --template typescript  

2, Replace the src folder with the src folder of this repository.  

## Code
```TypeScript

const Hello = () => {
    const onClick = () => {
        alert('Hello World !')
    }
    const text = 'Hello React !'

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default Hello
```

## Output Sample
$ npm run start

## Node.js
Install Node.js to run React.  

https://nodejs.org/en/  
 note : The stable, even version is recommended.  

Version Check  
$ node -v  

