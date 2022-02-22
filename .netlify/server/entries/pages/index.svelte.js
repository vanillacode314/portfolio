import { c as create_ssr_component, a as compute_rest_props, d as spread, e as escape_object, g as escape, i as createEventDispatcher, h as add_attribute, b as compute_slots, f as escape_attribute_value, v as validate_component, j as each } from "../../chunks/index-9e29247f.js";
import { c as computeClasses, g as getDomAttributes, B as Button } from "../../chunks/index-e53b8c0b.js";
const css$5 = {
  code: ".badge.rounded.svelte-lxlbcz{border-radius:30%}",
  map: null
};
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["type", "rounded"]);
  let { type = "primary" } = $$props;
  let { rounded = false } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  $$result.css.add(css$5);
  return `<span${spread([
    escape_object($$restProps),
    {
      class: escape($$restProps.class ?? "") + " badge " + escape(type)
    }
  ], {
    classes: (rounded ? "rounded" : "") + " svelte-lxlbcz"
  })}>${slots.default ? slots.default({}) : ``}
</span>`;
});
const css$4 = {
  code: "label.svelte-1g63nco{width:100%}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "value", "block", "type", "valid", "noResize"]);
  var _a;
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { block = false } = $$props;
  let { type = "text" } = $$props;
  let { valid = null } = $$props;
  let { noResize = false } = $$props;
  createEventDispatcher();
  let isValid = true;
  let attr;
  let classes;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.noResize === void 0 && $$bindings.noResize && noResize !== void 0)
    $$bindings.noResize(noResize);
  $$result.css.add(css$4);
  {
    if (valid) {
      isValid = valid(value);
    }
  }
  classes = `${(_a = $$restProps.class) !== null && _a !== void 0 ? _a : ""} ${computeClasses("input", { block })}`;
  {
    {
      attr = getDomAttributes({
        props: $$props,
        classes,
        toOmit: ["block", "value", "valid", "noResize"]
      });
    }
  }
  return `${type === "textarea" ? `<textarea${spread([escape_object(attr)], { classes: noResize ? "no-resize" : "" })}>${value || ""}</textarea>` : `${label ? `<label class="${"svelte-1g63nco"}">${escape(label)}
    <input${spread([escape_object(attr)], {
    classes: (!isValid && value ? "border-danger" : "") + " " + (isValid && value && valid ? "border-success" : "")
  })}${add_attribute("value", value, 0)}></label>` : `<input${spread([escape_object(attr)], {
    classes: (!isValid && value ? "border-danger" : "") + " " + (isValid && value && valid ? "border-success" : "")
  })}${add_attribute("value", value, 0)}>`}`}`;
});
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<form${spread([
    escape_object($$restProps),
    {
      class: escape($$restProps.class ?? "") + " form-group"
    }
  ], {})}>${slots.default ? slots.default({}) : ``}</form>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "title",
    "subTitle",
    "image",
    "imageAlt",
    "imagePlacement",
    "header",
    "footer",
    "width"
  ]);
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  let { image = "" } = $$props;
  let { imageAlt = "" } = $$props;
  let { imagePlacement = "top" } = $$props;
  let { header = "" } = $$props;
  let { footer = "" } = $$props;
  let { width = "100%" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.imageAlt === void 0 && $$bindings.imageAlt && imageAlt !== void 0)
    $$bindings.imageAlt(imageAlt);
  if ($$props.imagePlacement === void 0 && $$bindings.imagePlacement && imagePlacement !== void 0)
    $$bindings.imagePlacement(imagePlacement);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.footer === void 0 && $$bindings.footer && footer !== void 0)
    $$bindings.footer(footer);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  return `<div${spread([
    escape_object($$restProps),
    {
      class: escape($$restProps.class ?? "") + " card"
    },
    {
      style: escape_attribute_value(`width: ${width}`)
    }
  ], {})}>${header || $$slots.header ? `<header class="${"card-header"}">${$$slots.header ? `${slots.header ? slots.header({}) : ``}` : `${escape(header)}`}</header>` : ``}

  ${image && imagePlacement === "top" ? `<img${add_attribute("src", image, 0)}${add_attribute("alt", imageAlt, 0)}>` : ``}

  <div class="${"card-body"}"><h4 class="${"card-title"}">${$$slots.title ? `${slots.title ? slots.title({}) : ``}` : `${escape(title)}`}</h4>
    <h5 class="${"card-subtitle"}">${$$slots.subTitle ? `${slots.subTitle ? slots.subTitle({}) : ``}` : `${escape(subTitle)}`}</h5>

    <p class="${"card-text"}">${slots.default ? slots.default({}) : ``}</p>

    ${$$slots.bottom ? `${slots.bottom ? slots.bottom({}) : ``}` : ``}</div>

  ${image && imagePlacement === "bottom" ? `<img${add_attribute("src", image, 0)} class="${"image-bottom"}"${add_attribute("alt", imageAlt, 0)}>` : ``}

  ${footer || $$slots.footer ? `<footer class="${"card-footer"}">${$$slots.footer ? `${slots.footer ? slots.footer({}) : ``}` : `${escape(footer)}`}</footer>` : ``}
</div>`;
});
var AboutMe_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "img.svelte-a74ap{width:100%}div.svelte-a74ap{gap:1rem;display:grid;grid-template-columns:auto 1fr}@media screen and (max-width: 850px){div.svelte-a74ap{grid-template-columns:1fr}}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="${"about"}" id="${"about"}">${validate_component(Card, "Card").$$render($$result, { header: "About Me" }, {}, {
    default: () => {
      return `<div class="${"svelte-a74ap"}"><img src="${"https://picsum.photos/200"}" alt="${"profile"}" class="${"svelte-a74ap"}">
			<span><h4>Raqueebuddin Aziz (Web Developer)</h4>
				<p>Hi, I am Raqueebuddin Aziz, I freelance as a <strong>Web Developer</strong>.
				</p>
				<p>Hire me to craft an amazing online identity for your business through <strong>websites</strong>
					and
					<strong>mobile apps</strong> and help you succeed in the digital age :)
				</p></span></div>`;
    }
  })}
</section>`;
});
var Landing_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-jhwa6j{align-items:center;display:grid;grid-template-columns:1fr 1fr;gap:1rem}@media screen and (max-width: 850px){div.svelte-jhwa6j{grid-template-columns:1fr}}@media screen and (max-width: 850px){img.svelte-jhwa6j{display:none}}",
  map: null
};
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"paper svelte-jhwa6j"}"><section class="${"landing"}"><h2 class="${"text-secondary"}">I help businesses boost their online presence and compete in the digital age.
		</h2>
		<a href="${"#projects"}">See My Work</a></section>
	<img src="${"/assets/growth.svg"}" alt="${"growth"}" class="${"svelte-jhwa6j"}">
</div>`;
});
var Project_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".badges.svelte-10u6n0r{display:flex;gap:0.5rem}",
  map: null
};
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { index } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render($$result, {
    title: "#" + (index + 1) + " " + project.name,
    image: "https://picsum.photos/500",
    imageAlt: project.name + " screenshot"
  }, {}, {
    bottom: () => {
      return `<div slot="${"bottom"}"><a rel="${"external"}" class="${"background-primary"}"${add_attribute("href", project.url, 0)}>Visit</a>
		<a rel="${"external"}"${add_attribute("href", project.repo_url, 0)}>Repo / Source Code</a></div>`;
    },
    default: () => {
      return `<p>${escape(project.description)}</p>
	<div class="${"badges svelte-10u6n0r"}">${each(project.tech, (tech) => {
        return `${validate_component(Badge, "Badge").$$render($$result, {}, {}, {
          default: () => {
            return `${escape(tech)}`;
          }
        })}`;
      })}</div>`;
    }
  })}`;
});
var projects = [
  {
    id: "vtt",
    name: "VanillaTimeTracker",
    description: "A Free and Open source Time Tracker for Freelancers.",
    image: true,
    tech: [
      "svelte",
      "sveltekit",
      "attractions ui kit"
    ],
    url: "https://vanillatimetracker.netlify.app",
    repo_url: "https://github.com/vanillacode314/vanillatimetracker"
  },
  {
    id: "vim",
    name: "VanillaInvoiceManager",
    description: "A Free and Open source Invoice Manager.",
    image: true,
    tech: [
      "svelte",
      "sveltekit",
      "papercss"
    ],
    url: "https://vanillatimetracker.netlify.app",
    repo_url: "https://github.com/vanillacode314/vanillatimetracker"
  }
];
var Projects_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects.svelte-12tihp2{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));gap:1rem}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Card, "Card").$$render($$result, { header: "Projects" }, {}, {
    default: () => {
      return `<section class="${"projects svelte-12tihp2"}" id="${"projects"}">${each(projects, (project, index) => {
        return `${validate_component(Project, "Project").$$render($$result, { project, index }, {}, {})}`;
      })}</section>`;
    }
  })}`;
});
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}
${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}
${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}

<section class="${"contact"}" id="${"contact"}">${validate_component(Card, "Card").$$render($$result, { header: "Contact Me" }, {}, {
    default: () => {
      return `${validate_component(Form, "Form").$$render($$result, { name: "contact", netlify: true }, {}, {
        default: () => {
          return `${validate_component(Input, "Input").$$render($$result, {
            label: "Name",
            name: "name",
            placeholder: "name",
            type: "text",
            class: "margin-bottom-small"
          }, {}, {})}

			${validate_component(Input, "Input").$$render($$result, {
            label: "Email",
            name: "email",
            placeholder: "email",
            type: "email",
            class: "margin-bottom-small"
          }, {}, {})}
			${validate_component(Input, "Input").$$render($$result, {
            label: "Message",
            name: "message",
            placeholder: "message",
            type: "textarea",
            class: "margin-bottom-small"
          }, {}, {})}

			${validate_component(Button, "Button").$$render($$result, {
            type: "secondary",
            class: "margin-top-small"
          }, {}, {
            default: () => {
              return `Send`;
            }
          })}`;
        }
      })}`;
    }
  })}</section>
<section class="${"links"}" id="${"links"}">${validate_component(Card, "Card").$$render($$result, { header: "Links" }, {}, {
    default: () => {
      return `<ul><li><a rel="${"external"}" href="${"https://github.com/vanillacode314"}">Github</a></li>
			<li><a rel="${"external"}" href="${"https://gitlab.com/vanillacode"}">Gitlab</a></li>
			<li><a rel="${"external"}" href="${"https://discordapp.com/users/943908202846756874/"}">Discord</a></li>
			<li><a rel="${"external"}" href="${"https://t.me/vanillacode314"}">Telegram</a></li></ul>`;
    }
  })}</section>`;
});
export { Routes as default, prerender };
