.PHONY: all build clean install serve

install:
	@npm install
	@bower install --allow-root
	@cd public/components/reveal.js && npm install
	@make build

clean:
	@rm -rf build/*

build: clean
	@mkdir -p build/
	@find content/includes/ -type f | sort -n -k 3 -t/ | xargs cat > build/includes.jade
	@find content/slides/ -type f | sort -k3n -k4n -t/ | xargs cat > build/slides.jade
	@cp content/main.jade build/
	@./node_modules/.bin/jade -P -o build/ build/main.jade
	@cp build/main.html public/index.html

serve:
	@./node_modules/.bin/grunt serve

