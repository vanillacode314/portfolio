import { c as create_ssr_component, a as compute_rest_props, b as compute_slots, d as spread, e as escape_object, f as escape_attribute_value, v as validate_component } from "../../chunks/index-9e29247f.js";
import "../../chunks/index-e53b8c0b.js";
var paper_min = "";
var app = "";
const css = {
  code: ".collapsible.svelte-12pm6a>button.svelte-12pm6a{border:2px solid var(--primary)}.collapsible-body.open.svelte-12pm6a.svelte-12pm6a{margin:0;max-height:960px;opacity:1;padding:0}.paper-navbar li a.paper-btn{display:initial}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "fixed", "split"]);
  let $$slots = compute_slots(slots);
  let { border = true } = $$props;
  let { fixed = false } = $$props;
  let { split = true } = $$props;
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.split === void 0 && $$bindings.split && split !== void 0)
    $$bindings.split(split);
  $$result.css.add(css);
  return `<nav${spread([
    escape_object($$restProps),
    {
      class: escape_attribute_value(`${$$restProps.class ?? ""} paper-navbar`)
    }
  ], {
    classes: (border ? "border" : "") + " " + (fixed ? "fixed" : "") + " " + (split ? "split-nav" : "") + " svelte-12pm6a"
  })}>${$$slots.brand ? `<div class="${"nav-brand"}">${slots.brand ? slots.brand({}) : ``}</div>` : ``}
  <div class="${"collapsible svelte-12pm6a"}"><button class="${"svelte-12pm6a"}">\u2630</button>
    <div class="${["collapsible-body svelte-12pm6a", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></div>
</nav>`;
});
const Navbar_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, { style: "overflow: hidden;" }, {}, {
    brand: () => {
      return `<h3 slot="${"brand"}"><a href="${"/"}">VanillaCode</a></h3>`;
    },
    default: () => {
      return `<ul class="${"inline"}"><li><a href="${"#projects"}">Projects</a></li>
		<li><a href="${"#about"}">About</a></li>
		<li><a href="${"#contact"}">Contact</a></li></ul>`;
    }
  })}`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>VanillaCode</title>`, ""}`, ""}

<div class="${"container-lg"}">${validate_component(Navbar_1, "Navbar").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>`;
});
export { _layout as default };
