const axios = require('axios');

exports.lambdaHandler  = async event => {

    const headers = { 
        'Authorization': 'Bearer ESTfe074f29-6fec-420f-8797-5b4833f93b9eARY'
    }

    const fetchKey = await axios.post('https://api.estuary.tech/user/api-keys?perms=upload&expiry=5h', {}, {
        headers: headers
      })

    if(fetchKey.status == 200){
            console.log(JSON.stringify(fetchKey.data));
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key",
                    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
                    "Access-Control-Allow-Origin": "*"
                  },
                body: JSON.stringify(fetchKey.data)
            }
        }else{
            console.log(fetchKey.data);
            return {
                statusCode: 400,
                headers: {
                    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key",
                    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
                    "Access-Control-Allow-Origin": "*"
                  },
                body: 'Fetch API failed'
            }
        }
}
