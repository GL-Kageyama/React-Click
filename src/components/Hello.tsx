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