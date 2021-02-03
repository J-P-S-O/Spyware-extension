require "sinatra"
get "/" do 
  content_type :json
  {"params" => params}.to_json	
  puts params.to_json
end