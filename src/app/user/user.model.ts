export interface User {
    appartmentNumber: string;
    city: string;
    country: string;
    customerId: string;
    email: string;
    firebaseDevices: [{
        authToken: {
            stringValue: string
        };
        deviceName: string;
        fcmToken: {
            stringValue: string
        }
    }, {
        authToken: {
            stringValue: string
        };
        deviceName: string;
        fcmToken: {
            stringValue: string
        }
    }];
    floor: string;
    foreignKey: string;
    guid: string;
    handicap: number;
    id: number;
    language: string;
    lastLogin: string;
    logisticProcessList: [{
        guid: string;
        logisticList: [{
            guid: string;
            name: string;
            tokenList: [{
                active: number;
                generatedId: number;
                guid: string;
                logisticProcessGUID: string;
                name: string;
                type: number;
                validFrom: string;
                validTo: string;
                value: string
            }]
        }];
        name: string;
        type: number;
    }];
    userConfiguration: UserSettings;
    mobileAuthToken: string;
    name: string;
    phoneMobileNumber: string;
    phoneNumber: string;
    preName: string;
    street: string;
    streetNumber: string;
    title: string;
    tokenList: [{
        active: number;
        generatedId: number;
        guid: string;
        logisticProcessGUID: string;
        name: string;
        type: number;
        validFrom: string;
        validTo: string;
        value: string
    }];
    userGUID: string;
    userToken: string;
    zipCode: string;
}

export interface UserSettings {
    applicationLangauge: string;
    preferedDeliveryPlaceId: string;
}

export const MOCK_USER: User = {
    id: 9,
    guid: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1',
    preName: 'Sabine',
    name: 'Sauer',
    title: '',
    street: 'Boschstraße',
    streetNumber: '3',
    floor: null,
    appartmentNumber: null,
    zipCode: '71737',
    city: 'Kirchberg / Murr',
    country: 'DE',
    email: 'sauer@P014',
    phoneNumber: '',
    phoneMobileNumber: '',
    handicap: null,
    lastLogin: null,
    customerId: null,
    language: null,
    tokenList: null,
    logisticProcessList: null,
    foreignKey: null,
    userToken: 'c1e46f017983b562c8c6af0627f28ff9',
    firebaseDevices: [
        {
            deviceName: 'c1e46f017983b562c8c6af0627f28ff9_1',
            fcmToken: {
                stringValue: 'cwRRqwIBv9g:APA91bHPlOjs5jxce2khxfPGWA_QEA7V665LnYOIczF8ina-O3k917gGWKfS1dNiXvqOAAZbFTZgp0RjHSVEX_ehd4eYbaveAPVPAI0GDCDT7d-0RcgbfscEIktZioTJRUsmwEpmqioD'
            },
            authToken: {
                stringValue: 'ee6488b082bb58cf99609567eb87fd76255979d2e2383eda10dd7b1b8a2ea8bc'
            }
        },
        {
            deviceName: 'c1e46f017983b562c8c6af0627f28ff9',
            fcmToken: {
                stringValue: 'dOosbM_Wtnc:APA91bG1Git1zhYbqAdTLJirKdYgYiIO9KkhC_YhvLHl7bDdenvfEgEL8n8I9dOQOBtHcsX-JHpTxpIThwrkdCiGsGHProIcU4sP8Hqy-VlQJ7uJ4LqMQAcfH4ZNkREq6P6zztS3NoVd'
            },
            authToken: {
                stringValue: 'ee6488b082bb58cf99609567eb87fd76255979d2e2383eda10dd7b1b8a2ea8bc'
            }
        }
    ],
    mobileAuthToken: 'ee6488b082bb58cf99609567eb87fd76255979d2e2383eda10dd7b1b8a2ea8bc',
    userConfiguration: {
        preferedDeliveryPlaceId: '3',
        applicationLangauge: 'EN'
    },
    userGUID: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1'
};

