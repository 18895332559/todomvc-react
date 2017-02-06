// TodoList 组件是一个整体的组件，最终的React渲染也将只渲染这一个组件
// 该组件用于将『新增』和『列表』两个组件集成起来
var TodoList = React.createClass({
    render: function () {
        return (
            <div>
                <TypeNew  />
                <ListTodo />
            </div>
        );
    }
});

// TypeNew 组件用于新增数据，
var TypeNew = React.createClass({
    render: function () {
        return (
            <form>
                <input type="text" placeholder="typing a newthing todo" autoComplete="off" />
            </form>
        );
    }
});

// ListTodo 组件用于展示列表，并可以删除某一项内容，
var ListTodo = React.createClass({
    render: function () {
        return (
            <ul id="todo-list">
                {/* 其中显示数据列表 */}
            </ul>
        );
    }
});

// 将 TodoList 组件渲染到页面
React.render(<TodoList />, document.getElementById('container'));