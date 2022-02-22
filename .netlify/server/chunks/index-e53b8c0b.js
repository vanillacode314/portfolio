import { c as create_ssr_component, a as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, g as escape, b as compute_slots, v as validate_component, n as null_to_empty, h as add_attribute } from "./index-9e29247f.js";
const propToClass = {
  size: (pf, val) => `${pf}-${val}`,
  block: (pf, _val) => `${pf}-block`,
  type: (pf, val) => `${pf}-${val}`,
  outline: (pf, val) => `${pf}-${val}-outline`
};
function omit(obj, properties) {
  return Object.fromEntries(Object.entries(obj).filter(([key, _val]) => !properties.includes(key)));
}
function computeClasses(elPrefix, props) {
  return Object.entries(props).filter(([_prop, val]) => val).map(([prop, val]) => propToClass[prop](elPrefix, val)).join(" ");
}
function getDomAttributes({ props, classes, toOmit = [] }) {
  return {
    ...omit(props, toOmit),
    class: classes
  };
}
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "size", "block", "disabled", "outline", "isLink", "href", "external"]);
  var _a;
  let { type = null } = $$props;
  let { size = "default" } = $$props;
  let { block = false } = $$props;
  let { disabled = false } = $$props;
  let { outline = null } = $$props;
  let { isLink = false } = $$props;
  let { href = null } = $$props;
  let { external = false } = $$props;
  let attr;
  let classes;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.isLink === void 0 && $$bindings.isLink && isLink !== void 0)
    $$bindings.isLink(isLink);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.external === void 0 && $$bindings.external && external !== void 0)
    $$bindings.external(external);
  classes = `paper-btn ${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ""} ${computeClasses("btn", { size, block, type, outline })}`;
  {
    {
      attr = getDomAttributes({ props: $$restProps, classes });
    }
  }
  return `${isLink || href ? `<a${spread([
    escape_object(attr),
    { role: "button" },
    {
      href: escape_attribute_value(href ?? "javascript:void(0);")
    },
    {
      target: escape_attribute_value(external ? "_blank" : "_self")
    }
  ], { classes: disabled ? "disabled" : "" })}>${slots.default ? slots.default({}) : ``}</a>` : `<button${spread([escape_object(attr), { disabled: disabled || null }], { classes: disabled ? "disabled" : "" })}>${slots.default ? slots.default({}) : ``}</button>`}`;
});
var CloseButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-9vtsch{float:right;border:0;padding:0;background:none;box-shadow:none;transform:none}button.svelte-9vtsch:hover,button.svelte-9vtsch:focus{transform:none;box-shadow:none;border:0}",
  map: null
};
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ariaLabel"]);
  let { ariaLabel = "close" } = $$props;
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  $$result.css.add(css$2);
  return `<button${spread([
    escape_object($$restProps),
    {
      class: escape($$restProps.class ?? "") + " btn-close"
    },
    {
      "aria-label": escape_attribute_value(ariaLabel)
    }
  ], { classes: "svelte-9vtsch" })}>X
</button>`;
});
var Alert_svelte_svelte_type_style_lang = "";
var Badge_svelte_svelte_type_style_lang = "";
var Navbar_svelte_svelte_type_style_lang = "";
var Modal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".modal.active.svelte-1fqj53.svelte-1fqj53{opacity:1;visibility:visible}.modal.active.svelte-1fqj53 .modal-body.svelte-1fqj53{top:50%}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["active", "title", "subTitle", "closeBtnText"]);
  let $$slots = compute_slots(slots);
  let { active = false } = $$props;
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  let { closeBtnText = "Close" } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  if ($$props.closeBtnText === void 0 && $$bindings.closeBtnText && closeBtnText !== void 0)
    $$bindings.closeBtnText(closeBtnText);
  $$result.css.add(css$1);
  return `

<div${spread([
    escape_object($$restProps),
    {
      class: escape($$restProps.class ?? "") + " modal"
    }
  ], {
    classes: (active ? "active" : "") + " svelte-1fqj53"
  })}><div class="${"modal-body svelte-1fqj53"}">${validate_component(CloseButton, "CloseButton").$$render($$result, {}, {}, {})}
    ${title ? `<h4 class="${"modal-title"}">${escape(title)}</h4>` : ``}
    ${subTitle ? `<h5 class="${"modal-subtitle"}">${escape(subTitle)}</h5>` : ``}
    <p class="${"modal-text"}">${slots.default ? slots.default({}) : ``}</p>
    <footer>${$$slots.footer ? `${slots.footer ? slots.footer({}) : ``}` : ``}
      ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(closeBtnText)}`;
    }
  })}</footer></div>
</div>`;
});
function open$1(props) {
  const modal = new Modal({
    target: document.body,
    props: { active: true, ...props },
    intro: true
  });
  modal.close = modal.$destroy;
  return modal;
}
Modal.open = open$1;
var Tabs_svelte_svelte_type_style_lang = "";
var Tab_svelte_svelte_type_style_lang = "";
var Input_svelte_svelte_type_style_lang = "";
var Checkbox_svelte_svelte_type_style_lang = "";
var Switch_svelte_svelte_type_style_lang = "";
var Slider_svelte_svelte_type_style_lang = "";
var Popover_svelte_svelte_type_style_lang = "";
var Progress_svelte_svelte_type_style_lang = "";
var Pagination_svelte_svelte_type_style_lang = "";
var ToastContainer_svelte_svelte_type_style_lang = "";
var Toast_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-18aojlw{width:250px}",
  map: null
};
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let { message } = $$props;
  let { type = "primary" } = $$props;
  let { duration = 2e3 } = $$props;
  let { position = "top-right" } = $$props;
  let { pauseOnHover = false } = $$props;
  let { dismissible = false } = $$props;
  let { indefinite = false } = $$props;
  let { closeAriaLabel = "close" } = $$props;
  let { onClose = null } = $$props;
  let toastElement;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.pauseOnHover === void 0 && $$bindings.pauseOnHover && pauseOnHover !== void 0)
    $$bindings.pauseOnHover(pauseOnHover);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0)
    $$bindings.dismissible(dismissible);
  if ($$props.indefinite === void 0 && $$bindings.indefinite && indefinite !== void 0)
    $$bindings.indefinite(indefinite);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  $$result.css.add(css);
  classes = `alert margin-small shadow ${computeClasses("alert", { type })}`;
  return `${`<div class="${escape(null_to_empty(classes)) + " svelte-18aojlw"}" role="${"alert"}"${add_attribute("this", toastElement, 0)}><!-- HTML_TAG_START -->${message}<!-- HTML_TAG_END -->
    ${dismissible || indefinite ? `${validate_component(CloseButton, "CloseButton").$$render($$result, { ariaLabel: closeAriaLabel }, {}, {})}` : ``}</div>`}`;
});
function open(props) {
  if (typeof props === "string")
    props = { message: props };
  new Toast({
    target: document.body,
    props,
    intro: true
  });
}
function openType(type) {
  return (options) => {
    const props = {
      type,
      message: ""
    };
    if (typeof options === "string")
      props.message = options;
    else
      Object.assign(props, options);
    new Toast({
      target: document.body,
      props,
      intro: true
    });
  };
}
const info = openType("secondary");
const success = openType("success");
const warning = openType("warning");
const warn = warning;
const danger = openType("danger");
const error = danger;
Object.assign(Toast, {
  open,
  info,
  success,
  warning,
  warn,
  error,
  danger
});
export { Button as B, computeClasses as c, getDomAttributes as g };
