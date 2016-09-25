var localStyle = {
    fontSize: '32px',
    color: '#cccccc'
};

var localComponent =
    <h1 style={localStyle}>你好, 世界!</h1>
    ;

React.render(
    localComponent,
    document.getElementById('example')
);

