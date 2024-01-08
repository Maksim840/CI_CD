import chai from 'chai';
import chaiHttp from 'chai-http';
const expect =  chai.expect
const baseUrl = "http://localhost:8000/api"
import app from '../index.js';

const usersId = '4'
//const appServer = app.callback
chai.use(chaiHttp);
describe("Test", function(){
    this.timeout(10000);

    //var usersId;
    var usersBody = {
            "id" : "4",
            "name": "Roman",
            "surname": "rom",
            "age": "1834534"
    };
    this.beforeAll(() => {
        setTimeout(() => {

        }, 5000)
    })

    it('create a new user', function(done) {
        this.timeout(10000);
        chai.request(app)
        .post('/api/users')
        .send(usersBody)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("User has been successfuly created!");
            //expect(res.body.name).to.equal(usersBody.name);
            //expect(res.body.data.surname).to.equal(usersBody.surname);
            //usersId = res.body._id
            //console.log(usersId)
            done();
        });
    });

    it('get all users', function(done) {
        this.timeout(10000);

        chai.request(app)
        .get('/api/users')
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            const client = res.body.find(o=>o.id==usersId)
            expect(client).to.be.an("object")
            expect(client).to.have.property("id")
            done();
        });
    });

    it('get one user', function(done){
        this.timeout(10000);

        chai.request(app)
        .get('/api/users/'+usersId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            
            expect(res.body).to.have.property("id");
            //expect(res.body.id).to.equal(usersBody.usersId);
            expect(res.body.name).to.equal("Roman")
            done();
        });
    });

    it('update an user', function(done){
        this.timeout(10000);

        chai.request(app)
        .put('/api/users/'+usersId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("User has been successfuly updated!");
            done();
        });
    });

    it('delete an user', function(done){
        this.timeout(10000);

        chai.request(app)
        .delete('/api/users/'+usersId)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("User has been successfuly deleted!");
            // chai.request(baseUrl)
            //     .get('/client/'+usersId)
            //     .end(function (err, res) {
            //         expect(res).to.have.status(404);
            //         expect(res.body.message).to.equal("Can't Delete Contact!");
            //         done();
            //     });
            done();
        });
    });
});
