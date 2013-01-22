var should = chai.should(); // Note that should has to be executed
var testServer = 'http://localhost:3000';

$.ajaxPrefilter(function(options) {
    options.xhrFields = { withCredentials: true };
    options.url = testServer + options.url;
});

describe('carcass-auth-example', function() {
  describe('normal user', function() {
    it('should access index page', function(done) {
      $.get('/', function(data) {
        data.should.be.a('object');
        data.should.have.property('page', 'index');
        done();
      });
    })

    it('should not access /member', function(done) {
      $.get('/member', function(data) {
        data.should.be.a('object');
        data.should.have.property('login', false);
        done();
      });
    })

    it('should not access /logout', function(done) {
      $.get('/logout', function(data) {
        data.should.be.a('object');
        data.should.have.property('logout', 'ok');
        done();
      });
    });
  });
  
  describe('authenticated user', function() {
    it('should access index page', function(done) {
      $.get('/', function(data) {
        data.should.be.a('object');
        data.should.have.property('page', 'index');
        done();
      });
    });
    
    it('should be able to login', function(done) {
      $.get('/login', function(data) {
        data.should.be.a('object');
        data.should.have.property('login', 'ok');
        done();
      });
    });
    
    it('should be able to access /member', function(done) {
      $.get('/member', function(data) {
        data.should.be.a('object');
        data.should.have.property('login', true);
        done();
      })
    });
    
    it('should be able to logout', function(done) {
      $.get('/logout', function(data) {
        data.should.be.a('object');
        data.should.have.property('logout', 'ok');
        done();
      });
    });
    
    it('should not be able to access /member after logout', function(done) {
      $.get('/member', function(data) {
        data.should.be.a('object');
        data.should.have.property('login', false);
        done();
      });
    });
  });
})