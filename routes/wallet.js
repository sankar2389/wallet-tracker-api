
const walletRoutes = (app, fs) => {

    // variables
    const dataPath = './data/wallet.json';

    // helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

    // READ
    app.get('/wallet', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });

    // CREATE
    app.post('/wallet', (req, res) => {

        readFile(data => {
            // Note: this isn't ideal for production use. 
            // ideally, use something like a UUID or other GUID for a unique ID value
            const newwalletId = Date.now().toString();

            // add the new wallet
            
            req.body.id = newwalletId.toString();
            data.push(req.body);
            //data = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new wallet added');
            });
        },
            true);
    });


    // UPDATE
    app.put('/wallet/:id', (req, res) => {

        readFile(data => {

            // add the new wallet
            const walletId = req.params["id"];
            let index= data.findIndex(x => x["id"] === walletId); 
            if (index == -1) {

            }else{
                req.body.id = walletId;
                data[index] = req.body;
            }
            //data.id[walletId].push(req.body);

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`wallet id:${walletId} updated`);
            });
        },
            true);
    });


    // DELETE
    app.delete('/wallet/:id', (req, res) => {

        readFile(data => {

            // delete the wallet
            const walletId = req.params["id"];
            let index= data.findIndex(x => x["id"] === walletId); 
            if (index == -1) {

            }else{
                delete data[index];
                data = data.filter(x => x != null);
                //data[index].splice;
            }

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`wallet id:${walletId} removed`);
            });
        },
            true);
    });
};

module.exports = walletRoutes;
