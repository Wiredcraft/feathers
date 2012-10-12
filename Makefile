
build: components
	@component build --verbose --out _includes/component

components:
	@component install

clean:
	rm -fr components _includes/component

all:
	make clean
	make build

.PHONY: clean
