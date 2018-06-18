process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('data', () => {

    describe('/GET data', () => {
        it('should get all data', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.be.eql({ status: 'success' });
                    done();
                });
        });
    });

    describe('/GET data', () => {
        it('should get data', (done) => {
            chai.request(server)
                .get('/data')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.be.eql({ data: 'Any String' });
                    done();
                });
        });
    });

    describe('/POST data', () => {
        it('should post data', (done) => {
            let data = {
                data: 'Any String'
            }
            chai.request(server)
                .post('/data')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.should.be.eql({ data: 'Any String' });
                    done();
                });
        });
    });
});