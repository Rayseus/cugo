Given (/^the input (.*)$/) do |obj|
    @a = obj.split('+')
end

When (/^the calculator is running$/) do
    @result = @a[0][1].to_i + @a[1].to_i
end

Then (/^the output should be (.*)$/) do |op|
    if @result == op[1].to_i
        puts "yes"
    else
        puts "no"
    end
end