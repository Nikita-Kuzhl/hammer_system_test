import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Button, Card, Col, Form, Input} from "antd";
import {connect} from "react-redux";
import {APP_PREFIX_PATH} from "../../../configs/AppConfig";
import Loading from "../../../components/shared-components/Loading";

const UserSettings = ({user: users}) => {
    const history = useHistory()
    const [user, setUsers] = useState()
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!users.users) {
            history.push(`${APP_PREFIX_PATH}/main/client/list`)
        }
        if (users.users) {
            setUsers(users.users.filter(item => Number(item.id) === Number(id))[0])
        }
    }, []);

    const onFinish = async () => {
        setLoading(true)

        await setTimeout(() => {
            console.log(user)
            setLoading(false)
            history.push(`${APP_PREFIX_PATH}/main/client/list`)
        }, 1000)


    }
    console.log(loading)

    return (
        <>
            {user && !loading && <Card>
                <div className="mt-4">
                    <Form
                        name="basicInformation"
                        initialValues={
                            {
                                'name': user.name,
                                'email': user.email,
                                'phone': user.phone,
                                'website': user.website,
                                'address': user.address.street,
                                'city': user.address.city
                            }
                        }
                        onFinish={onFinish}

                    >

                        <Col lg={12}>
                            <Form.Item
                                label="Имя и Фамилия"
                                name="name"
                            >

                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Телефон"
                                name="phone"
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Сайт"
                                name="website"
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Адресс"
                                name="address"
                            >
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                label="Город"
                                name="city"
                            >
                                <Input/>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>

                    </Form>
                </div>
            </Card>}
            {loading && <Loading/>}
        </>

    );
};

export default connect((props) => (props))(UserSettings);
