require_relative '../../spec/spec_helper.rb'
require 'faraday'

RSpec.describe 'GET request to /posts endpoint' do
  before do
    @resp = Faraday.get("https://jsonplaceholder.typicode.com/posts")
  end
  it 'should have 200 status code' do
    expect(@resp.status).to eql(200)
  end  
  it 'should have "application/json; charset=utf-8" in response header Content-Type' do
    expect(@resp.headers['Content-Type']).to eql('application/json; charset=utf-8')
  end
  it 'should not have empty response body' do
    expect(@resp.body).not_to be([])
  end
end



