require 'sinatra'
require 'sinatra/reloader'
require_relative 'classes.rb'

$moe = Staff.new("Moses", '/images/moe.jpg', "Moses is the chief and fearless leader of our company")

$larry = Staff.new("Louis", '/images/larry.jpg', "Louis is our deputy director")

$curly = Staff.new("Jerome", '/images/curly.jpg',"Jerome is the brains of the operation.")

get '/about_us' do
  erb :about_us
end

get '/' do
  erb :index
end

get '/environment' do
  erb :environment
end

get '/staff' do
  erb :staff
end

get '/staff/:id' do
  if params[:id] == "larry"
    erb :larry, :layout => :staff_layout
  elsif params[:id] == "moe"
    erb :moe, :layout => :staff_layout
  elsif params[:id] == "curly"
    erb :curly, :layout => :staff_layout
  end
end
