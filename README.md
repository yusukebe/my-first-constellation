# My first Constellation

It's my first [Constellation](https://developers.cloudflare.com/constellation/) application based on [the Cloudflare Blog article](https://blog.cloudflare.com/introducing-constellation/).


## Usage


Install:

```
yarn install
```

Dev:

```
yarn dev
```

Deploy:

```
yarn deploy
```

Try:

```
curl https://your-workers-url -F file=@./images/cat.png
```

## Materials

* `models/squeezenet1_1.onnx` - is from `https://github.com/microsoft/onnxjs-demo/raw/master/docs/squeezenet1_1.onnx`
* `src/imagenet.ts` - is from `https://raw.githubusercontent.com/microsoft/onnxjs-demo/master/src/data/imagenet.ts`

These are distributed under MIT License by Microsoft Corporation.

```
MIT License
Copyright (c) Microsoft Corporation. All rights reserved.
```

## Author

Yusuke Wada <https://github.com/yusukebe>

## License

MIT
