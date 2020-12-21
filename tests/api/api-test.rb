require_relative '../../spec/spec_helper.rb'
require 'faraday'
require 'json'

RSpec.describe 'GET request to /posts endpoint' do
  before do
    @resp = Faraday.get("https://jsonplaceholder.typicode.com/posts")
    @data = JSON.parse(@resp.body)
  end
  it 'should have 200 status code' do
    expect(@resp.status).to eql(200)
  end  
  it 'should have Content-Type set to "application/json; charset=utf-8" in response headers' do
    expect(@resp.headers['Content-Type']).to eql('application/json; charset=utf-8')
  end
  it 'should not have empty response body' do
    expect(@resp.body).not_to be([])
  end
  it 'should include "qui est esse title" in response body' do
    expect(@resp.body).to include( '"title": "qui est esse"')
  end
  it 'should have at least 20 items in response body' do
    expect(@data.length).to be > 20
  end
  it 'should have "id" set to 100 in the last object of response body' do
    expect(@data[-1]['id']).to eql(100)
  end
end



