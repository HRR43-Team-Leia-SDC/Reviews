/* eslint-disable no-undef */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const request = require('supertest');
const app = require('../index.js');

describe('Should respond to get requests to an id', () => {
  it('responds with an object of JSON data', (done) => {
    request(app).get('/reviews/20').expect('Content-Type', /json/).expect(200)
      .then(() => {
        done();
      });
  });
  it('should respond with the expected username given an id', (done) => {
    request(app).get('/reviews/25')
      .then((resp) => {
        expect(resp.body[15].username).toBe('Tessie_Turcotte');
        done();
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          done();
        }
      });
  });
  it('should respond with the proper rating given an id', (done) => {
    request(app).get('/reviews/50')
      .then((resp) => {
        expect(resp.body[10].rating).toEqual(3);
        done();
      })
      .catch((err) => {
        if (err) {
          console.error(err);
          done();
        }
      });
  });
});
