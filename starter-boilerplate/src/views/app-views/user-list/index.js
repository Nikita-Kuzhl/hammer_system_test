import React, {useEffect} from 'react'
import {Button, Card, Table, Tooltip} from 'antd';
import {DeleteOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from 'react-router-dom'
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Loading from "../../../components/shared-components/Loading";
import {APP_PREFIX_PATH} from 'configs/AppConfig'
import {connect} from 'react-redux'
import {getUsersRequest} from "../../../redux/actions";

const UserList = (props) => {
    const history = useHistory()
    const {user} = props;
    const {users, loading} = user;

    useEffect(() => {
        props.getUsersRequest()
    }, [props.getUsersRequest])

    const tableColumns = [
        {
            title: 'Пользователь',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <AvatarStatus icon={<UserOutlined/>} name={record.name} subTitle={record.email}/>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Номер',
            dataIndex: 'phone',
            render: (_, record) => (
                <div>{record.phone}</div>
            )
        },
        {
            title: 'Адрес',
            dataIndex: 'street',
            render: (_, record) => (
                <div>г. {record.address.city}, ул. {record.address.street}</div>
            )
        },
        {
            title: 'Сайт',
            dataIndex: 'website',
            render: (_, record) => (
                <div>{record.website}</div>
            )
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="Delete">
                        <Button danger icon={<DeleteOutlined/>} size="small"/>
                    </Tooltip>
                </div>
            )
        }
    ];
    return (
        <>
            {loading && <Loading/>}
            {!loading &&
                <Card bodyStyle={{'padding': '0px'}}>
                    <Table onRow={(data) => {
                        return {
                            onClick: () => history.push(`${APP_PREFIX_PATH}/main/client/item/${data.id}`)
                        }
                    }} columns={tableColumns} dataSource={users} rowKey='id' pagination={false}/>
                </Card>}
        </>
    )

}


export default connect(({user}) => ({user}), {getUsersRequest})(UserList);
