import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

import Message from '../message/message.component'


const PostShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField source="Global Chat" />
            <TextField source="Send yout message here" />
            <Message/>
        </SimpleShowLayout>
    </Show>
);

export default PostShow;