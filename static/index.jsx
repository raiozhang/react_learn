var localStyle = {
    fontSize: '32px',
    color: '#cccccc'
};
var ClassComponent = React.createClass({
    getInitialState: function () {//初始化状态
        return {
            text: ' 我是一个状态'
        }
    },
    getDefaultProps: function () {//初始化的props 且 props 一般在组件内部不被更改
        return {
            name: '初始化的props '
        }
    },
    changeState: function () {
        var changeText = '我是一个更改过的状态';
        this.setProps({//props只能由父组件更新
            name: '更改过的props'
        });
        this.setState({text: changeText}, function () {
            //当状态更改且重新渲染DOM 后调用

        });//更改状态
    },
    render: function () {
        return (
            <div>
                <a href="javascript:;" onClick={this.changeState}>change the state</a>

                <p>我是{this.props.name}</p>

                <div>
                    <p>{this.state.text}</p>
                </div>
            </div>

        )
    }
});

var LocalComponent = React.createClass({
        render: function () {
            return (
                <div>
                    <h1 style={localStyle}>你好，世界</h1>
                    <ClassComponent msg='期望的props' name=''/>
                </div>
            );
        }
    });

ReactDOM.render(
    <LocalComponent/>,
    document.getElementById('app')
);

