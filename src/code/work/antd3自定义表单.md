---
title: antd3 自定义表单
tag: word
---

::: tabs

@tab 自定义 table

```js
import React, { Component } from "react";
import { Table, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";
import { CommonApi } from "../../../../api";
/**
 * table 自定义绑定form表单
 */
class BindTable extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      searchedColumn: "",
      dataSource: [],
      searchValues: {
        pageIndex: 1,
        pageSize: 10,
      },
      total: null,
      loading: false,
      selectName: null,
    };
    this.columns = [
      {
        title: "用户名",
        dataIndex: "username",
        key: "username",
        ...this.getColumnSearchProps("username"),
      },
      {
        title: "用户姓名",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "所属部门",
        dataIndex: "deptname",
        key: "deptname",
      },
    ];
  }
  componentDidMount() {
    const { keyword } = this.props;
    this.getUserListData(keyword);
  }

  componentDidUpdate(prevprops) {
    if (this.props.keyword !== prevprops.keyword) {
      this.getUserListData(this.props.keyword);
    }
  }

  //获取用户列表
  getUserListData = (keyword) => {
    const { searchValues } = this.state;
    const params = {
      ...searchValues,
    };
    params.keyword = keyword;
    this.setState({
      loading: true,
    });
    CommonApi.getUserList(params).then((res) => {
      console.log(res, "res");
      if (res && res.success) {
        this.setState({
          dataSource: res.list,
          total: res.pageInfo.totalCount,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
      }
    });
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder="搜索用户名"
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          搜索
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          重置
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    // confirm();
    this.getUserListData(selectedKeys[0]);
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    const { keyword } = this.props;
    this.getUserListData(keyword);
    this.setState({ searchText: "" });
  };

  onSizeChange = (page, pageSize) => {
    const { keyword } = this.props;
    this.setState(
      {
        searchValues: {
          pageIndex: page,
          pageSize: pageSize,
        },
      },
      () => {
        this.getUserListData(keyword);
      }
    );
  };
  onSelect = (record) => {
    this.setState({
      selectName: record.username,
    });
  };

  renderDisabled = (userIdList, value) => {
    const filterNull = userIdList.filter((item) => item);
    if (value) {
      const filterCheckValue = filterNull.filter((item) => item !== value[0]);
      return filterCheckValue;
    }
    return filterNull;
  };

  render() {
    const { dataSource, total, searchValues, loading, selectName } = this.state;
    const { data, onChange, value, keyword, username, userIdList } = this.props;

    return (
      <Table
        title={() => {
          return (
            <div>
              已选中:
              <span style={{ color: "#ffc069" }}>
                {selectName ? selectName : username}
              </span>
            </div>
          );
        }}
        columns={this.columns}
        dataSource={dataSource}
        size="small"
        rowKey={(record) => record.user_id}
        rowSelection={{
          onChange: onChange,
          selectedRowKeys: value,
          type: "radio",
          onSelect: this.onSelect,
          getCheckboxProps: (record) => ({
            disabled: this.renderDisabled(userIdList, value).includes(
              record.user_id
            ),
          }),
        }}
        scroll={{ y: 350 }}
        loading={loading}
        pagination={{
          total: total,
          showTotal: (total) => `共 ${total} 条`,
          onChange: this.onSizeChange,
          showQuickJumper: true,
          current: searchValues.pageIndex,
          defaultCurrent: 1,
          pageSize: searchValues.pageSize,
        }}
      />
    );
  }
}

export default BindTable;
```

@tab 引用

```js
<Col span={18}>
  <Form.Item label="绑定用户">
    {getFieldDecorator("user_id", {
      initialValue: [defaultValue.user_id],
    })(
      <BindTable
        keyword={searchValue ? searchValue : defaultValue.deptname}
        username={defaultValue.username}
        userIdList={userIdList}
      />
    )}
  </Form.Item>
</Col>
```

:::

### 效果

<img src="/assets/work/01.png"/>
