import { Typography, Icon } from 'antd';
import './index.css'

const { Title } = Typography;

const iconsList = [
    {
        id: 1,
        text: 'We will deliver it'
    },
    {
        id: 2,
        text: 'Follow rules'
    },
    {
        id: 3,
        text: 'Get notified on every step.'
    },
    {
        id: 4,
        text: 'Transparency'
    }
];

export default () => (
    <div id="js-why-us" className="about-us">
        <Title level={2}>Why us</Title>
        <div className="icons-container flex flex-wrap">
            {
                iconsList.map(icon => (
                    <div key={icon.id} className="w-full sm:w-1/4 icon-wrapper">
                        <div className="icon">
                            <p>{icon.text}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
)
