require 'sinatra/base'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    session[:thermostat]
    # session[:temperature]
    send_file 'thermostat.html'
  end

  get '/temperature' do
    session[:thermostat]
    p session[:thermostat]
    redirect '/'
  end

  post '/temperature' do
    # session[:temperature] = params[:temperature]
    session[:thermostat]  = params[:thermostat]
    p session[:thermostat]
    redirect '/'
  end
  # start the server if ruby file executed directly
  run! if app_file == $0
end
