import axios from 'axios';

export default async function binQuery(card) {
    const xmlPayload = `
        <EnhancedBINQuery xmlns="https://transaction.elementexpress.com">
        <Credentials>
            <AcceptorID>${process.env.ACCEPTOR_ID}</AcceptorID>
            <AccountID>${process.env.ACCOUNT_ID}</AccountID>
            <AccountToken>${process.env.ACCOUNT_TOKEN}</AccountToken>
        </Credentials>
        <Application>
            <ApplicationID>${process.env.APPLICATION_ID}</ApplicationID>
            <ApplicationName>Zach Test</ApplicationName>
            <ApplicationVersion>1.0</ApplicationVersion>
        </Application>
        <Card>
            <CardNumber>${card}</CardNumber>
            <ExpirationMonth>12</ExpirationMonth>
            <ExpirationYear>25</ExpirationYear>
        </Card>
        </EnhancedBINQuery>
    `

    const response = await axios.post(
        'https://certtransaction.elementexpress.com/',
        xmlPayload,
        { headers: { 'Content-Type': 'text/xml' } }
    );

    return(response.data);
};