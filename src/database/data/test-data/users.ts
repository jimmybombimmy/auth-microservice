import { UserDataInterface } from "../../../types"

// Add password reset later on

export const users: UserDataInterface[] = [
  {
    _id: "655b50b42e2bcd090b435230",
    username: "Goku123",
    email: "goku@kamehouse.com",
    created: "2024-12-26T10:15:22.406Z",
    amended: "2024-12-26T10:15:22.406Z",
    hash: "8a76bc7984f55aaed45e564298b4522ecd89af5e50c20c2b5b5026e638601ce5092966ccfd40605b67d9057e80dd855ea0487a1bcc087d06896b49b324e97d65",
    salt: "4e3bd8afaba52ab35b6ad7e4fddd48e82c522a43291f571d1b760fac300ed057",
    admin: false,
    // passwordReset: {passwordResetToken: "null", passwordResetTokenExpires: "null"},
    __v: 0
  },
  {
    _id: "655b5158c6965d869180e906",
    username: "Vegeta123",
    email: "vegeta@saiyanprince.com",
    created: "2024-12-26T10:15:22.406Z",
    amended: "2024-12-26T10:15:22.406Z",
    hash: "7fd6a9dd17b9d98d770ff220a075571b508e15da24aaefc9d74d237d15762259a40169892256797956ec10f7f809ca9af88dcf41754f4c20792683541738f0ef",
    salt: "b9ac94d0301679edfe3e64d433713bf5ed4ec43bfa096ac7f795b3f5c430b2c0",
    admin: false,
    // passwordReset: {passwordResetToken: "null", passwordResetTokenExpires: "null"},
    __v: 0
  },
  {
    _id: "655b51a746341227e519c2dc",
    username: "Piccolo123",
    email: "piccolo@namekian.com",
    created: "2024-12-26T10:15:22.406Z",
    amended: "2024-12-26T10:15:22.406Z",
    hash: "00e2aac75d84886e505cd90a434ddb02a8c360715206e8213fc0bccd4810845c39bb5813873c36c428c6f157215b9e45f81982d38da66ca6d3c5c2fa42582b58",
    salt: "f07237749756631c07cb65703195a11df5fb3f4638d9a0422b09d6278adf8b82",
    admin: false,
    // passwordReset: {passwordResetToken: "null", passwordResetTokenExpires: "null"},
    __v: 0
  },

  // password test done with Bulma123
  // token in email to be sent in tests: "e603f9f3ce342368cba6009be557878640631cc635ca9f8eb40d4754008fcaac"
  {
    _id: "655b5292f8a18265e0b77848",
    username: "Bulma123",
    email: "bulma@capsulecorp.com",
    created: "2024-12-26T10:15:22.406Z",
    amended: "2024-12-26T10:15:22.406Z",
    hash: "d58f26390dc71664a3720d98e9de94c3fc638e6b1060705f1622c453dbe8233ba4cb95db8fc5070c4e541938d6e50124d58b372fe4d45ac930047eb76ffb244b",
    salt: "cc27570869b35a176146e22ce77b3376ab1c59f34a2f94fd524be8cf4e0e1b9b",
    // passwordReset: {passwordResetToken: "bde5e41086ee3a7ea660453a6a7b384d637d5192f0330981ebd0ebab006bd635", passwordResetTokenExpires: Date.now() + (10 * 60 * 1000)},
    admin: false,
    __v: 0
  },

  // This user is similar to Bulma123, except their token will have expired
  // token in email to be sent in tests: "e3c978be171cd3ab7c861351dcc6ef3db2ce6bd13be2560817f3b3697c2008a7"
  {
    _id: "655b52b296b1af33bdb06bfb",
    username: "Trunks123",
    email: "trunks@future.com",
    created: "2024-12-26T10:15:22.406Z",
    amended: "2024-12-26T10:15:22.406Z",
    hash: "b3ced5f777a5e0e8df0e17e3fa19da13bf6b34c9bdc9943b8c55a683c8824a1b8912a4d23ac7b844fa011ea40b1be50dff3caf62634d5df796d1e9d1efc5c708",
    salt: "501c81f31d010786129748b37be296b8962ca064681fae90a95cec4d730227b6",
    // passwordReset: {passwordResetToken: "1a34406843e4310565ad2e4598e9d419d4b9900b16cfd176d3b0495a68ec179f", passwordResetTokenExpires: Date.now() },
    admin: false,
    __v: 0
  },
]
