import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const Event = () => {

    return (
        <div className="row d-flex align-items-center ">

            <div className="col-md-6">
                <Card
                    hoverable
                    style={{ width: 240, borderRadius: 12 }}
                    cover={<img alt="example" style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" />
                </Card>
            </div>
            <div className="col-md-6 " >

                <div className="m-3">
                    <Card
                        hoverable
                        style={{ width: 240, borderRadius: 12 }}
                        cover={<img alt="example" style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" />
                    </Card>
                </div>
                <div className="m-3">
                    <Card
                        hoverable
                        style={{ width: 240, borderRadius: 12 }}
                        cover={<img alt="example" style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" />
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default Event;