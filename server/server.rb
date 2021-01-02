require 'socket'
server = TCPServer.new 8000
session = server.accept

while true
  request = session.gets.chomp
  puts "They said \"#{request}\"" # the server logs each response
  session.puts "But why did you say \"#{request}\"?" # but it's not too bright
end

session.close