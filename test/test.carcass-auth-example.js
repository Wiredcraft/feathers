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

    it('should not get model', function(done) {
      $.get('/model', function(data) {
          should.false('This should not happen.')
      })
      .error(function(error) { 
          error.status.should.eql(403);
          done();
      });
    })
    
    it('should not modify model', function(done) {
        $.post('/model', function(data) {
            should.false('This should not happen.')
        })
        .error(function(error) {
            error.status.should.eql(403);
            done();
        });
    })

    it('should not access /logout', function(done) {
      $.get('/logout', function(data) {
          should.false('This should not happen.')
      })
      .error(function(error) {
          error.status.should.eql(403);
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
      $.post('/login', {
          username: 'any',
          password: 'any'
      }, function(data) {
        data.should.be.a('object');
        data.should.have.property('login', 'ok');
        done();
      });
    });
    
    it('should be able to get model', function(done) {
      $.get('/model', function(data) {
        data.should.be.a('object');
        data.should.have.property('id', 'id');
        data.should.have.property('name', 'name');
        done();
      })
    });
    
    it('should be ablt to modify model', function(done) {
        $.post('/model', { id: 'm', name: 'm' }, function(data) {
           data.should.be.a('object');
           data.should.have.property('id', 'm');
           data.should.have.property('name', 'm');
           done(); 
        });
    })
    
    it('should be able to logout', function(done) {
      $.get('/logout', function(data) {
        data.should.be.a('object');
        data.should.have.property('logout', 'ok');
        done();
      });
    });
    
    it('should not be able to access /model after logout', function(done) {
      $.get('/model', function(data) {
          should.false('This should not happen.');
      })
      .error(function(error) {
          error.status.should.eql(403);
          done();
      })
      ;
    });
  });
})