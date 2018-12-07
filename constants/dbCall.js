export function dbCall(databaseQuery, component, callBackFunction)
{

    return fetch('https://twoticketsdatabase.herokuapp.com/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query:databaseQuery
        }),
    }).then((response) => response.json())
        .then((responseJson) => {
            callBackFunction(responseJson.data, component);
        }).catch((error) => {
        console.error(error);
    });
}