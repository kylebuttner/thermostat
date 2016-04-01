require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    session[:temperature]
    # session[:temperature]
    send_file 'thermostat.html'
  end

  get '/temperature' do
    session[:temperature]
    # p session[:thermostat]
    # redirect '/'
  end

  post '/temperature' do
    # session[:temperature] = params[:temperature]
    session[:temperature]  = params[:temperature]
    p session[:temperature]
    redirect '/'
  end
  # start the server if ruby file executed directly
  run! if app_file == $0
end
