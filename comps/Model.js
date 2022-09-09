import '@google/model-viewer';

const Model = () => (
  <div id="card">
  <model-viewer
    src="/piranha.glb"
    ios-src=""
    poster=""
    alt=""
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
  ></model-viewer>
</div>
)

export default Model;