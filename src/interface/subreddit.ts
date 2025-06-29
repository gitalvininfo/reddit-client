export interface SubReddit {
  kind: string;
  data: Data2;
}

interface Data2 {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: null;
  children: Child[];
  before: null;
}

interface Child {
  kind: string;
  data: Data;
}

interface Data {
  approved_at_utc: null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: unknown[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null;
  downs: number;
  thumbnail_height: null | number;
  top_awarded_type: null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: null;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: Mediaembed;
  thumbnail_width: null | number;
  author_flair_template_id: null;
  is_original_content: boolean;
  user_reports: unknown[];
  secure_media: Securemedia | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: Securemediaembed;
  link_flair_text: null;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean | number;
  author_flair_css_class: null;
  author_flair_richtext: unknown[];
  gildings: Gildings;
  post_hint?: string;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: null | string;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  url_overridden_by_dest?: string;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview?: Preview;
  all_awardings: unknown[];
  awarders: unknown[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null;
  treatment_tags: unknown[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  contest_mode: boolean;
  mod_reports: unknown[];
  author_patreon_flair: boolean;
  author_flair_text_color: null;
  permalink: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: Securemedia | null;
  is_video: boolean;
  media_metadata?: Mediametadata;
  crosspost_parent_list?: Crosspostparentlist[];
  crosspost_parent?: string;
}

interface Crosspostparentlist {
  approved_at_utc: null;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: unknown[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: null;
  downs: number;
  thumbnail_height: number;
  top_awarded_type: null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: null;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  media_embed: Gildings;
  thumbnail_width: number;
  author_flair_template_id: null;
  is_original_content: boolean;
  user_reports: unknown[];
  secure_media: null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null;
  secure_media_embed: Gildings;
  link_flair_text: null;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: null;
  author_flair_richtext: unknown[];
  gildings: Gildings;
  post_hint: string;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: string;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  url_overridden_by_dest: string;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview;
  all_awardings: unknown[];
  awarders: unknown[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null;
  treatment_tags: unknown[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: string;
  author_is_blocked: boolean;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  contest_mode: boolean;
  mod_reports: unknown[];
  author_patreon_flair: boolean;
  author_flair_text_color: null;
  permalink: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: null;
  is_video: boolean;
}

interface Mediametadata {
  jo1ignv6rq9f1: Jo1ignv6rq9f1;
}

interface Jo1ignv6rq9f1 {
  status: string;
  e: string;
  m: string;
  p: P[];
  s: P;
  id: string;
}

interface P {
  y: number;
  x: number;
  u: string;
}

interface Preview {
  images: Image[];
  enabled: boolean;
}

interface Image {
  source: Source;
  resolutions: Source[];
  variants: Gildings;
  id: string;
}

interface Source {
  url: string;
  width: number;
  height: number;
}

type Gildings = object;

interface Securemediaembed {
  content?: string;
  width?: number;
  scrolling?: boolean;
  media_domain_url?: string;
  height?: number;
}

interface Securemedia {
  type: string;
  oembed: Oembed;
}

interface Oembed {
  provider_url: string;
  version: string;
  title: string;
  type: string;
  thumbnail_width: number;
  height: number;
  width: number;
  html: string;
  author_name: string;
  provider_name: string;
  thumbnail_url: string;
  thumbnail_height: number;
  author_url: string;
}

interface Mediaembed {
  content?: string;
  width?: number;
  scrolling?: boolean;
  height?: number;
}
