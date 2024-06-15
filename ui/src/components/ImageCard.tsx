import React from 'react';
import { Card } from "react-bootstrap";
import * as utils from "../utils";

interface Props {
    url: string,
    onClick: () => void
}

const ImageCard: React.FunctionComponent<Props> = (props) => {
    const cookies = JSON.parse(localStorage.getItem('cookies') || 'null') || [];
    
    return (
        <Card
            bg="secondary"
            onClick={props.onClick}
        >
            <Card.Img
                src={'/image/' + utils.base64encode(JSON.stringify({
                    key: props.url,
                    edits: { resize: { width: 240, height: 240 } }
                })) + '?' + cookies.map((cookie:any) => cookie.name.split('CloudFront-')[1] + '=' + cookie.value).join('&')}
                variant="top"
            />
        </Card>
    );
}

export default ImageCard;
