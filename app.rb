require 'sinatra'

get '/' do
  send_file 'index.html'
end

set :environment, :production
set :bind, 'localhost'

