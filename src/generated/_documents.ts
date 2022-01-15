export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents a date and time in ISO 8601 format. Accepts shortcuts like `2021` to represent midnight Fri Jan 01 2021. Also accepts ISO 8601 durations strings which are added to the current date to create the represented date (e.g '-P2W1D' represents the date that was two weeks and 1 day ago)  */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON values as a string */
  JSONObject: any;
  /** Represents a date in ISO 8601 format. Accepts shortcuts like `2021` to represent midnight Fri Jan 01 2021. Also accepts ISO 8601 durations strings which are added to the current date to create the represented date (e.g '-P2W1D' represents the date that was two weeks and 1 day ago)  */
  TimelessDate: any;
  /** A universally unique identifier as specified by RFC 4122. */
  UUID: any;
};

/** An API key. Grants access to the user's resources. */
export type ApiKey = Node & {
  __typename?: 'ApiKey';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The label of the API key. */
  label: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  edges: Array<ApiKeyEdge>;
  nodes: Array<ApiKey>;
  pageInfo: PageInfo;
};

export type ApiKeyCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The API key value. */
  key: Scalars['String'];
  /** The label for the API key. */
  label: Scalars['String'];
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ApiKey;
};

export type ApiKeyPayload = {
  __typename?: 'ApiKeyPayload';
  /** The API key that was created. */
  apiKey: ApiKey;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Public information of the OAuth application. */
export type Application = {
  __typename?: 'Application';
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Application name. */
  name: Scalars['String'];
};

export type ArchivePayload = {
  __typename?: 'ArchivePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Contains requested archived model objects. */
export type ArchiveResponse = {
  __typename?: 'ArchiveResponse';
  /** A JSON serialized collection of model objects loaded from the archive */
  archive: Scalars['String'];
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars['Float'];
  /** The total number of entities in the archive. */
  totalCount: Scalars['Float'];
};

/** [Alpha] Issue attachment (e.g. support ticket, pull request). */
export type Attachment = Node & {
  __typename?: 'Attachment';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The creator of the attachment. */
  creator?: Maybe<User>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue this attachment belongs to. */
  issue: Issue;
  /** Custom metadata related to the attachment. */
  metadata: Scalars['JSONObject'];
  /** Information about the source which created the attachment. */
  source?: Maybe<Scalars['JSONObject']>;
  /** An accessor helper to source.type, defines the source type of the attachment. */
  sourceType?: Maybe<Scalars['JSONObject']>;
  /** Content for the subtitle line in the Linear attachment widget. */
  subtitle?: Maybe<Scalars['String']>;
  /** Content for the title line in the Linear attachment widget. */
  title: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Location of the attachment which is also used as an identifier. */
  url: Scalars['String'];
};

export type AttachmentConnection = {
  __typename?: 'AttachmentConnection';
  edges: Array<AttachmentEdge>;
  nodes: Array<Attachment>;
  pageInfo: PageInfo;
};

export type AttachmentCreateInput = {
  /** Create a linked comment with markdown body. */
  commentBody?: InputMaybe<Scalars['String']>;
  /** [Internal] Create a linked comment with Prosemirror body. Please use `commentBody` instead */
  commentBodyData?: InputMaybe<Scalars['JSONObject']>;
  /** Indicates if attachments for the same source application should be grouped in the Linear UI. */
  groupBySource?: InputMaybe<Scalars['Boolean']>;
  /** An icon url to display with the attachment. Should be of jpg or png format. Maximum of 1MB in size. Dimensions should be 20x20px for optimal display quality. */
  iconUrl?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The issue to associate the attachment with. */
  issueId: Scalars['String'];
  /** Attachment metadata object with string and number values. */
  metadata?: InputMaybe<Scalars['JSONObject']>;
  /** The attachment subtitle. */
  subtitle?: InputMaybe<Scalars['String']>;
  /** The attachment title. */
  title: Scalars['String'];
  /** Attachment location which is also used as an unique identifier for the attachment. If another attachment is created with the same `url` value, existing record is updated instead. */
  url: Scalars['String'];
};

export type AttachmentEdge = {
  __typename?: 'AttachmentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Attachment;
};

/** [Alpha] Attachment filtering options. */
export type AttachmentFilter = {
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the attachments creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the source type. */
  sourceType?: InputMaybe<NestedStringComparator>;
  /** Comparator for the subtitle. */
  subtitle?: InputMaybe<NullableStringComparator>;
  /** Comparator for the title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Comparator for the url. */
  url?: InputMaybe<StringComparator>;
};

export type AttachmentPayload = {
  __typename?: 'AttachmentPayload';
  /** The issue attachment that was created. */
  attachment: Attachment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type AttachmentUpdateInput = {
  /** An icon url to display with the attachment. Should be of jpg or png format. Maximum of 1MB in size. Dimensions should be 20x20px for optimal display quality. */
  iconUrl?: InputMaybe<Scalars['String']>;
  /** Attachment metadata object with string and number values. */
  metadata?: InputMaybe<Scalars['JSONObject']>;
  /** The attachment subtitle. */
  subtitle?: InputMaybe<Scalars['String']>;
  /** The attachment title. */
  title: Scalars['String'];
};

/** Workspace audit log entry object. */
export type AuditEntry = Node & {
  __typename?: 'AuditEntry';
  /** The user that caused the audit entry to be created. */
  actor?: Maybe<User>;
  /** The ID of the user that caused the audit entry to be created. */
  actorId?: Maybe<Scalars['String']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Country code of request resulting to audit entry. */
  countryCode?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** IP from actor when entry was recorded. */
  ip?: Maybe<Scalars['String']>;
  /** Additional metadata related to the audit entry. */
  metadata?: Maybe<Scalars['JSONObject']>;
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type AuditEntryConnection = {
  __typename?: 'AuditEntryConnection';
  edges: Array<AuditEntryEdge>;
  nodes: Array<AuditEntry>;
  pageInfo: PageInfo;
};

export type AuditEntryEdge = {
  __typename?: 'AuditEntryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: AuditEntry;
};

/** [Alpha] Audit entry filtering options. */
export type AuditEntryFilter = {
  /** Filters that the audit entry actor must satisfy. */
  actor?: InputMaybe<NullableUserFilter>;
  /** Comparator for the country code. */
  countryCode?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the IP address. */
  ip?: InputMaybe<StringComparator>;
  /** Comparator for the type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type AuditEntryType = {
  __typename?: 'AuditEntryType';
  /** Description of the audit entry type. */
  description: Scalars['String'];
  /** The audit entry type. */
  type: Scalars['String'];
};

export type AuthResolverResponse = {
  __typename?: 'AuthResolverResponse';
  /** Should the signup flow allow access for the domain. */
  allowDomainAccess?: Maybe<Scalars['Boolean']>;
  /** Organizations this account has access to, but is not yet a member. */
  availableOrganizations?: Maybe<Array<Organization>>;
  /** Email for the authenticated account. */
  email?: Maybe<Scalars['String']>;
  /** User account ID. */
  id: Scalars['String'];
  /** ID of the organization last accessed by the user. */
  lastUsedOrganizationId?: Maybe<Scalars['String']>;
  /** JWT token for authentication of the account. */
  token?: Maybe<Scalars['String']>;
  /** Users belonging to this account. */
  users: Array<User>;
};

/** Public information of the OAuth application, plus the authorized scopes for a given user. */
export type AuthorizedApplication = {
  __typename?: 'AuthorizedApplication';
  /** OAuth application's ID. */
  appId: Scalars['String'];
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Application name. */
  name: Scalars['String'];
  /** Scopes that are authorized for this application for a given user. */
  scope: Array<Scalars['String']>;
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean'];
};

/** Relation load request. */
export type BatchRequest = {
  /** The indexed key to load models for. */
  indexedKey: Scalars['String'];
  /** The value of the indexed key to load models for. */
  keyValue: Scalars['String'];
  /** The class name of the model to load. */
  modelClass: Scalars['String'];
};

export type BillingDetailsPayload = {
  __typename?: 'BillingDetailsPayload';
  /** The customer's email address the invoices are sent to. */
  email?: Maybe<Scalars['String']>;
  /** List of invoices, if any. */
  invoices: Array<Invoice>;
  /** The payment method. */
  paymentMethod?: Maybe<Card>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type BillingEmailPayload = {
  __typename?: 'BillingEmailPayload';
  /** The customer's email address the invoices are sent to. */
  email?: Maybe<Scalars['String']>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type BillingEmailUpdateInput = {
  /** The email address to which to send invoices. */
  email: Scalars['String'];
};

/** Comparator for booleans. */
export type BooleanComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Boolean']>;
};

export type CallRoomCreateInput = {
  /** The identifier of the issue to create the room for. */
  issueId: Scalars['String'];
};

export type CallRoomPayload = {
  __typename?: 'CallRoomPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The url to the room. */
  url?: Maybe<Scalars['String']>;
};

export type Card = {
  __typename?: 'Card';
  /** The brand of the card, e.g. Visa. */
  brand: Scalars['String'];
  /** The last four digits used to identify the card. */
  last4: Scalars['String'];
};

export type CollaborationDocumentUpdateInput = {
  /** Client identifier. */
  clientId: Scalars['String'];
  /** Document identifier. */
  issueId: Scalars['String'];
  /** New document steps from the client. */
  steps: Array<Scalars['JSON']>;
  /** Client's document version number. */
  version: Scalars['Int'];
};

export type CollaborationDocumentUpdatePayload = {
  __typename?: 'CollaborationDocumentUpdatePayload';
  /** Document steps the client has not seen yet and need to rebase it's local steps on. */
  steps?: Maybe<StepsResponse>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A comment associated with an issue. */
export type Comment = Node & {
  __typename?: 'Comment';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The comment content in markdown format. */
  body: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The time user edited the comment. */
  editedAt?: Maybe<Scalars['DateTime']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue that the comment is associated with. */
  issue: Issue;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Comment's URL. */
  url: Scalars['String'];
  /** The user who wrote the comment. */
  user: User;
};

/** [Alpha] Comment filtering options. */
export type CommentCollectionFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<CommentFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that needs to be matched by all comments. */
  every?: InputMaybe<CommentFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<IssueFilter>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<CommentFilter>>;
  /** Filters that needs to be matched by some comments. */
  some?: InputMaybe<CommentFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
};

export type CommentCreateInput = {
  /** The comment content in markdown format. */
  body?: InputMaybe<Scalars['String']>;
  /** The comment content as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The issue to associate the comment with. */
  issueId: Scalars['String'];
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Comment;
};

/** [Alpha] Comment filtering options. */
export type CommentFilter = {
  /** Compound filters, all of which need to be matched by the comment. */
  and?: InputMaybe<Array<CommentFilter>>;
  /** Comparator for the comments body. */
  body?: InputMaybe<StringComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the comments issue must satisfy. */
  issue?: InputMaybe<IssueFilter>;
  /** Compound filters, one of which need to be matched by the comment. */
  or?: InputMaybe<Array<CommentFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
  /** Filters that the comments creator must satisfy. */
  user?: InputMaybe<UserFilter>;
};

export type CommentPayload = {
  __typename?: 'CommentPayload';
  /** The comment that was created or updated. */
  comment: Comment;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CommentUpdateInput = {
  /** The comment content. */
  body?: InputMaybe<Scalars['String']>;
  /** The comment content as a Prosemirror document. */
  bodyData?: InputMaybe<Scalars['JSON']>;
};

/** GitHub's commit data */
export type CommitPayload = {
  __typename?: 'CommitPayload';
  added: Array<Scalars['String']>;
  id: Scalars['String'];
  message: Scalars['String'];
  modified: Array<Scalars['String']>;
  removed: Array<Scalars['String']>;
  timestamp: Scalars['String'];
  url: Scalars['String'];
};

export type ContactCreateInput = {
  /** User's browser information. */
  browser?: InputMaybe<Scalars['String']>;
  /** User's device information. */
  device?: InputMaybe<Scalars['String']>;
  /** How disappointed the user would be if they could no longer use Linear. */
  disappointmentRating?: InputMaybe<Scalars['Int']>;
  /** The message the user sent. */
  message: Scalars['String'];
  /** User's operating system. */
  operatingSystem?: InputMaybe<Scalars['String']>;
  /** The type of support contact. */
  type: Scalars['String'];
};

export type ContactPayload = {
  __typename?: 'ContactPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CreateCsvExportReportPayload = {
  __typename?: 'CreateCsvExportReportPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CreateOrJoinOrganizationResponse = {
  __typename?: 'CreateOrJoinOrganizationResponse';
  organization: Organization;
  user: User;
};

export type CreateOrganizationInput = {
  /** Whether the organization should allow email domain access. */
  domainAccess?: InputMaybe<Scalars['Boolean']>;
  /** The name of the organization. */
  name: Scalars['String'];
  /** The timezone of the organization, passed in by client. */
  timezone?: InputMaybe<Scalars['String']>;
  /** The URL key of the organization. */
  urlKey: Scalars['String'];
  /** JSON serialized UTM parameters associated with the creation of the workspace. */
  utm?: InputMaybe<Scalars['String']>;
};

/** A custom view that has been saved by a user. */
export type CustomView = Node & {
  __typename?: 'CustomView';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The color of the icon of the custom view. */
  color?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the custom view. */
  creator: User;
  /** The description of the custom view. */
  description?: Maybe<Scalars['String']>;
  /** [Alpha] The filter applied to issues in the custom view. */
  filterData: Scalars['JSONObject'];
  /**
   * The filters applied to issues in the custom view.
   * @deprecated Will be replaced by `filterData` in a future update
   */
  filters: Scalars['JSONObject'];
  /** The icon of the custom view. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The name of the custom view. */
  name: Scalars['String'];
  /** The organization of the custom view. */
  organization: Organization;
  /** Whether the custom view is shared with everyone in the organization. */
  shared: Scalars['Boolean'];
  /** The team associated with the custom view. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type CustomViewConnection = {
  __typename?: 'CustomViewConnection';
  edges: Array<CustomViewEdge>;
  nodes: Array<CustomView>;
  pageInfo: PageInfo;
};

export type CustomViewCreateInput = {
  /** The color of the icon of the custom view. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the custom view. */
  description?: InputMaybe<Scalars['String']>;
  /** The filter applied to issues in the custom view. */
  filterData?: InputMaybe<Scalars['JSONObject']>;
  /** The filters applied to issues in the custom view. */
  filters?: InputMaybe<Scalars['JSONObject']>;
  /** The icon of the custom view. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the custom view. */
  name: Scalars['String'];
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: InputMaybe<Scalars['Boolean']>;
  /** The id of the team associated with the custom view. */
  teamId?: InputMaybe<Scalars['String']>;
};

export type CustomViewEdge = {
  __typename?: 'CustomViewEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: CustomView;
};

export type CustomViewPayload = {
  __typename?: 'CustomViewPayload';
  /** The custom view that was created or updated. */
  customView: CustomView;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CustomViewUpdateInput = {
  /** The color of the icon of the custom view. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the custom view. */
  description?: InputMaybe<Scalars['String']>;
  /** The filter applied to issues in the custom view. */
  filterData?: InputMaybe<Scalars['JSONObject']>;
  /** The filters applied to issues in the custom view. */
  filters?: InputMaybe<Scalars['JSONObject']>;
  /** The icon of the custom view. */
  icon?: InputMaybe<Scalars['String']>;
  /** The name of the custom view. */
  name?: InputMaybe<Scalars['String']>;
  /** Whether the custom view is shared with everyone in the organization. */
  shared?: InputMaybe<Scalars['Boolean']>;
  /** The id of the team associated with the custom view. */
  teamId?: InputMaybe<Scalars['String']>;
};

/** A set of issues to be resolved in a specified amount of time. */
export type Cycle = Node & {
  __typename?: 'Cycle';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the cycle was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The number of completed issues in the cycle after each day. */
  completedIssueCountHistory: Array<Scalars['Float']>;
  /** The number of completed estimation points after each day. */
  completedScopeHistory: Array<Scalars['Float']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The end time of the cycle. */
  endsAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The total number of issues in the cycle after each day. */
  issueCountHistory: Array<Scalars['Float']>;
  /** Issues associated with the cycle. */
  issues: IssueConnection;
  /** The custom name of the cycle. */
  name?: Maybe<Scalars['String']>;
  /** The number of the cycle. */
  number: Scalars['Float'];
  /** The overall progress of the cycle. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float'];
  /** The total number of estimation points after each day. */
  scopeHistory: Array<Scalars['Float']>;
  /** The start time of the cycle. */
  startsAt: Scalars['DateTime'];
  /** The team that the cycle is associated with. */
  team: Team;
  /** Issues that weren't completed when the cycle was closed. */
  uncompletedIssuesUponClose: IssueConnection;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A set of issues to be resolved in a specified amount of time. */
export type CycleUncompletedIssuesUponCloseArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type CycleConnection = {
  __typename?: 'CycleConnection';
  edges: Array<CycleEdge>;
  nodes: Array<Cycle>;
  pageInfo: PageInfo;
};

export type CycleCreateInput = {
  /** The completion time of the cycle. If null, the cycle hasn't been completed. */
  completedAt?: InputMaybe<Scalars['DateTime']>;
  /** The end date of the cycle. */
  endsAt: Scalars['DateTime'];
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The custom name of the cycle. */
  name?: InputMaybe<Scalars['String']>;
  /** The start date of the cycle. */
  startsAt: Scalars['DateTime'];
  /** The team to associate the cycle with. */
  teamId: Scalars['String'];
};

export type CycleEdge = {
  __typename?: 'CycleEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Cycle;
};

/** [Alpha] Project filtering options. */
export type CycleFilter = {
  /** Compound filters, all of which need to be matched by the cycle. */
  and?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle completed at date. */
  completedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the cycle ends at date. */
  endsAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the cycles issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the cycle name. */
  name?: InputMaybe<StringComparator>;
  /** Comparator for the cycle number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle start date. */
  startsAt?: InputMaybe<DateComparator>;
  /** Filters that the cycles team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type CyclePayload = {
  __typename?: 'CyclePayload';
  /** The Cycle that was created or updated. */
  cycle?: Maybe<Cycle>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type CycleUpdateInput = {
  /** The end date of the cycle. */
  completedAt?: InputMaybe<Scalars['DateTime']>;
  /** The end date of the cycle. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** The custom name of the cycle. */
  name?: InputMaybe<Scalars['String']>;
  /** The start date of the cycle. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
};

/** Comparator for dates. */
export type DateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['DateTime']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DebugPayload = {
  __typename?: 'DebugPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type DeleteOrganizationInput = {
  /** The deletion code to confirm operation. */
  deletionCode: Scalars['String'];
};

/** Contains the requested dependencies. */
export type DependencyResponse = {
  __typename?: 'DependencyResponse';
  /** A JSON serialized collection of dependencies. */
  dependencies: Scalars['String'];
};

/** A document for a project. */
export type Document = Node & {
  __typename?: 'Document';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The color of the icon. */
  color?: Maybe<Scalars['String']>;
  /** The document content in markdown format. */
  content?: Maybe<Scalars['String']>;
  /** The document content as JSON. */
  contentData?: Maybe<Scalars['JSONObject']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the document. */
  creator: User;
  /** The icon of the document. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The project that the document is associated with. */
  project: Project;
  /** The document's unique URL slug. */
  slugId: Scalars['String'];
  /** The document title. */
  title: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user who last updated the document. */
  updatedBy: User;
};

export type DocumentConnection = {
  __typename?: 'DocumentConnection';
  edges: Array<DocumentEdge>;
  nodes: Array<Document>;
  pageInfo: PageInfo;
};

export type DocumentCreateInput = {
  /** The color of the icon. */
  color?: InputMaybe<Scalars['String']>;
  /** The document content as markdown. */
  content?: InputMaybe<Scalars['String']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: InputMaybe<Scalars['JSONObject']>;
  /** The icon of the document. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** Related project for the document. */
  projectId: Scalars['String'];
  /** The title of the document. */
  title: Scalars['String'];
};

export type DocumentEdge = {
  __typename?: 'DocumentEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Document;
};

export type DocumentPayload = {
  __typename?: 'DocumentPayload';
  /** The document that was created or updated. */
  document: Document;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Collaborative editing steps for documents. */
export type DocumentStep = Node & {
  __typename?: 'DocumentStep';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Connected client ID. */
  clientId: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Step data. */
  step: Scalars['JSON'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Step version. */
  version: Scalars['Float'];
};

export type DocumentUpdateInput = {
  /** The color of the icon. */
  color?: InputMaybe<Scalars['String']>;
  /** The document content as markdown. */
  content?: InputMaybe<Scalars['String']>;
  /** [Internal] The document content as a Prosemirror document. */
  contentData?: InputMaybe<Scalars['JSONObject']>;
  /** The icon of the document. */
  icon?: InputMaybe<Scalars['String']>;
  /** Related project for the document. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The title of the document. */
  title?: InputMaybe<Scalars['String']>;
};

/** A version of a document. */
export type DocumentVersion = Node & {
  __typename?: 'DocumentVersion';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The document's content in markdown format. */
  content?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the version. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The project that the document is associated with. */
  project: Project;
  /** The version revision number. */
  revision: Scalars['Float'];
  /** The document's title. */
  title: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type DocumentVersionConnection = {
  __typename?: 'DocumentVersionConnection';
  edges: Array<DocumentVersionEdge>;
  nodes: Array<DocumentVersion>;
  pageInfo: PageInfo;
};

export type DocumentVersionEdge = {
  __typename?: 'DocumentVersionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: DocumentVersion;
};

export type DocumentationSearchPayload = {
  __typename?: 'DocumentationSearchPayload';
  /** The content of the documentation. */
  content: Scalars['String'];
  /** The time the documentation was published. */
  publishedAt: Scalars['DateTime'];
  /** The title of the found documentation. */
  title: Scalars['String'];
  /** The type of documentation that was found. */
  type?: Maybe<Scalars['String']>;
  /** The url to the documentation. */
  url: Scalars['String'];
};

export type EmailSubscribeInput = {
  /** Email to subscribe. */
  email: Scalars['String'];
};

export type EmailSubscribePayload = {
  __typename?: 'EmailSubscribePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type EmailUnsubscribeInput = {
  /** The user's email validation token. */
  token: Scalars['String'];
  /** Email type to unsubscribed from. */
  type: Scalars['String'];
  /** The identifier of the user. */
  userId: Scalars['String'];
};

export type EmailUnsubscribePayload = {
  __typename?: 'EmailUnsubscribePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type EmailUserAccountAuthChallengeInput = {
  /** Auth code for the client initiating the sequence. */
  clientAuthCode?: InputMaybe<Scalars['String']>;
  /** The email for which to generate the magic login code. */
  email: Scalars['String'];
  /** Whether the login was requested from the desktop app. */
  isDesktop?: InputMaybe<Scalars['Boolean']>;
  /** Signup code. */
  signupCode?: InputMaybe<Scalars['String']>;
};

export type EmailUserAccountAuthChallengeResponse = {
  __typename?: 'EmailUserAccountAuthChallengeResponse';
  /** Supported challenge for this user account. Can be either verificationCode or password. */
  authType: Scalars['String'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** A custom emoji. */
export type Emoji = Node & {
  __typename?: 'Emoji';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the emoji. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The emoji's name. */
  name: Scalars['String'];
  /** The organization that the emoji belongs to. */
  organization: Organization;
  /** The source of the emoji. */
  source: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The emoji image URL. */
  url: Scalars['String'];
};

export type EmojiConnection = {
  __typename?: 'EmojiConnection';
  edges: Array<EmojiEdge>;
  nodes: Array<Emoji>;
  pageInfo: PageInfo;
};

export type EmojiCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the custom emoji. */
  name: Scalars['String'];
  /** The URL for the emoji. */
  url: Scalars['String'];
};

export type EmojiEdge = {
  __typename?: 'EmojiEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Emoji;
};

export type EmojiPayload = {
  __typename?: 'EmojiPayload';
  /** The emoji that was created. */
  emoji: Emoji;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type EventCreateInput = {
  /** The category of the event to create. */
  category: Scalars['String'];
  /** Additional data of the event, encoded as JSON. */
  data?: InputMaybe<Scalars['JSON']>;
  /** The subject of the event. */
  subject: Scalars['String'];
  /** The target identifier of the event. */
  targetId?: InputMaybe<Scalars['String']>;
  /** The value of the event. */
  value?: InputMaybe<Scalars['Float']>;
};

export type EventPayload = {
  __typename?: 'EventPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** User favorites presented in the sidebar. */
export type Favorite = Node & {
  __typename?: 'Favorite';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Children of the favorite. Only applies to favorites of type folder. */
  children: FavoriteConnection;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The favorited custom view. */
  customView?: Maybe<CustomView>;
  /** The favorited cycle. */
  cycle?: Maybe<Cycle>;
  /** The favorited document. */
  document?: Maybe<Document>;
  /** The name of the folder. Only applies to favorites of type folder. */
  folderName?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The favorited issue. */
  issue?: Maybe<Issue>;
  /** The favorited label. */
  label?: Maybe<IssueLabel>;
  /** The parent folder of the favorite. */
  parent?: Maybe<Favorite>;
  /** The favorited project. */
  project?: Maybe<Project>;
  /** The favorited team of the project. */
  projectTeam?: Maybe<Team>;
  /** The order of the item in the favorites list. */
  sortOrder: Scalars['Float'];
  /** The type of the favorite. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The owner of the favorite. */
  user: User;
};


/** User favorites presented in the sidebar. */
export type FavoriteChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type FavoriteConnection = {
  __typename?: 'FavoriteConnection';
  edges: Array<FavoriteEdge>;
  nodes: Array<Favorite>;
  pageInfo: PageInfo;
};

export type FavoriteCreateInput = {
  /** The identifier of the custom view to favorite. */
  customViewId?: InputMaybe<Scalars['String']>;
  /** The identifier of the cycle to favorite. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The identifier of the document to favorite. */
  documentId?: InputMaybe<Scalars['String']>;
  /** The name of the favorite folder. */
  folderName?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the issue to favorite. */
  issueId?: InputMaybe<Scalars['String']>;
  /** The identifier of the label to favorite. */
  labelId?: InputMaybe<Scalars['String']>;
  /** The parent folder of the favorite. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The identifier of the project to favorite. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The identifier of the project team to favorite. */
  projectTeamId?: InputMaybe<Scalars['String']>;
  /** The position of the item in the favorites list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type FavoriteEdge = {
  __typename?: 'FavoriteEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Favorite;
};

export type FavoritePayload = {
  __typename?: 'FavoritePayload';
  /** The object that was added as a favorite. */
  favorite: Favorite;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type FavoriteUpdateInput = {
  /** The id of the folder to move the favorite under. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The position of the item in the favorites list. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type FeedbackCreateInput = {
  /** How disappointed the user would be if he/she could no longer use Linear. */
  disappointmentRating: Scalars['Float'];
  /** The feedback the user sent. */
  feedback: Scalars['String'];
};

export type FeedbackPayload = {
  __typename?: 'FeedbackPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Object representing Figma preview information. */
export type FigmaEmbed = {
  __typename?: 'FigmaEmbed';
  /** Date when the file was updated at the time of embedding. */
  lastModified: Scalars['DateTime'];
  /** Figma file name. */
  name: Scalars['String'];
  /** Node name. */
  nodeName?: Maybe<Scalars['String']>;
  /** Figma screenshot URL. */
  url?: Maybe<Scalars['String']>;
};

export type FigmaEmbedPayload = {
  __typename?: 'FigmaEmbedPayload';
  /** Figma embed information. */
  figmaEmbed?: Maybe<FigmaEmbed>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type FrontAttachmentPayload = {
  __typename?: 'FrontAttachmentPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** GitHub OAuth token, plus information about the organizations the user is a member of. */
export type GithubOAuthTokenPayload = {
  __typename?: 'GithubOAuthTokenPayload';
  /** A list of the GitHub organizations the user is a member of with attached repositories. */
  organizations?: Maybe<Array<GithubOrg>>;
  /** The OAuth token if the operation to fetch it was successful. */
  token?: Maybe<Scalars['String']>;
};

/** Relevant information for the GitHub organization. */
export type GithubOrg = {
  __typename?: 'GithubOrg';
  /** GitHub organization id. */
  id: Scalars['String'];
  /** The login for the GitHub organization. */
  login: Scalars['String'];
  /** The name of the GitHub organization. */
  name: Scalars['String'];
  /** Repositories that the organization owns. */
  repositories: Array<GithubRepo>;
};

/** Relevant information for the GitHub repository. */
export type GithubRepo = {
  __typename?: 'GithubRepo';
  /** The id of the GitHub repository. */
  id: Scalars['String'];
  /** The name of the GitHub repository. */
  name: Scalars['String'];
};

/** Google Sheets specific settings. */
export type GoogleSheetsSettings = {
  __typename?: 'GoogleSheetsSettings';
  sheetId: Scalars['Float'];
  spreadsheetId: Scalars['String'];
  spreadsheetUrl: Scalars['String'];
  updatedIssuesAt: Scalars['DateTime'];
};

export type GoogleSheetsSettingsInput = {
  sheetId: Scalars['Float'];
  spreadsheetId: Scalars['String'];
  spreadsheetUrl: Scalars['String'];
  updatedIssuesAt: Scalars['DateTime'];
};

export type GoogleUserAccountAuthInput = {
  /** Code returned from Google's OAuth flow. */
  code: Scalars['String'];
  /** The URI to redirect the user to. */
  redirectUri?: InputMaybe<Scalars['String']>;
  /** Signup code. */
  signupCode?: InputMaybe<Scalars['String']>;
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: InputMaybe<Array<Scalars['String']>>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String'];
};

/** Comparator for identifiers. */
export type IdComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['ID']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['ID']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type ImageUploadFromUrlPayload = {
  __typename?: 'ImageUploadFromUrlPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The URL containing the image. */
  url?: Maybe<Scalars['String']>;
};

/** An integration with an external service. */
export type Integration = Node & {
  __typename?: 'Integration';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user that added the integration. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The organization that the integration is associated with. */
  organization: Organization;
  /** The integration's type. */
  service: Scalars['String'];
  /** The team that the integration is associated with. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IntegrationConnection = {
  __typename?: 'IntegrationConnection';
  edges: Array<IntegrationEdge>;
  nodes: Array<Integration>;
  pageInfo: PageInfo;
};

export type IntegrationEdge = {
  __typename?: 'IntegrationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Integration;
};

export type IntegrationPayload = {
  __typename?: 'IntegrationPayload';
  /** The integration that was created or updated. */
  integration?: Maybe<Integration>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** An integration resource created by an external service. */
export type IntegrationResource = Node & {
  __typename?: 'IntegrationResource';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Detailed information about the external resource. */
  data: IntegrationResourceData;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The integration that the resource is associated with. */
  integration: Integration;
  /** The issue that the resource is associated with. */
  issue: Issue;
  /** Pull request information for GitHub pull requests and GitLab merge requests. */
  pullRequest: PullRequestPayload;
  /** The external service resource ID. */
  resourceId: Scalars['String'];
  /** The integration's type. */
  resourceType: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IntegrationResourceConnection = {
  __typename?: 'IntegrationResourceConnection';
  edges: Array<IntegrationResourceEdge>;
  nodes: Array<IntegrationResource>;
  pageInfo: PageInfo;
};

/** Integration resource's payload */
export type IntegrationResourceData = {
  __typename?: 'IntegrationResourceData';
  /** The payload for an IntegrationResource of type 'githubCommit' */
  githubCommit?: Maybe<CommitPayload>;
  /** The payload for an IntegrationResource of type 'githubPullRequest' */
  githubPullRequest?: Maybe<PullRequestPayload>;
  /** The payload for an IntegrationResource of type 'gitlabMergeRequest' */
  gitlabMergeRequest?: Maybe<PullRequestPayload>;
  /** The payload for an IntegrationResource of type 'sentryIssue' */
  sentryIssue?: Maybe<SentryIssuePayload>;
};

export type IntegrationResourceEdge = {
  __typename?: 'IntegrationResourceEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IntegrationResource;
};

/** The integration resource's settings */
export type IntegrationSettings = {
  __typename?: 'IntegrationSettings';
  googleSheets?: Maybe<GoogleSheetsSettings>;
  intercom?: Maybe<IntercomSettings>;
  jira?: Maybe<JiraSettings>;
  sentry?: Maybe<SentrySettings>;
  slackPost?: Maybe<SlackPostSettings>;
  slackProjectPost?: Maybe<SlackPostSettings>;
  zendesk?: Maybe<ZendeskSettings>;
};

export type IntegrationSettingsInput = {
  googleSheets?: InputMaybe<GoogleSheetsSettingsInput>;
  intercom?: InputMaybe<IntercomSettingsInput>;
  jira?: InputMaybe<JiraSettingsInput>;
  sentry?: InputMaybe<SentrySettingsInput>;
  slackPost?: InputMaybe<SlackPostSettingsInput>;
  slackProjectPost?: InputMaybe<SlackPostSettingsInput>;
  zendesk?: InputMaybe<ZendeskSettingsInput>;
};

/** Intercom specific settings. */
export type IntercomSettings = {
  __typename?: 'IntercomSettings';
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: Maybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: Maybe<Scalars['Boolean']>;
};

export type IntercomSettingsInput = {
  /** Whether an internal message should be added when someone comments on an issue. */
  sendNoteOnComment?: InputMaybe<Scalars['Boolean']>;
  /** Whether an internal message should be added when a Linear issue changes status (for status types except completed or canceled). */
  sendNoteOnStatusChange?: InputMaybe<Scalars['Boolean']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  /** The creation date of the invoice. */
  created: Scalars['DateTime'];
  /** The due date of the invoice. */
  dueDate?: Maybe<Scalars['TimelessDate']>;
  /** The status of the invoice. */
  status: Scalars['String'];
  /** The invoice total, in cents. */
  total: Scalars['Float'];
  /** The URL at which the invoice can be viewed or paid. */
  url?: Maybe<Scalars['String']>;
};

/** An issue. */
export type Issue = Node & {
  __typename?: 'Issue';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The user to whom the issue is assigned to. */
  assignee?: Maybe<User>;
  /** Attachments associated with the issue. */
  attachments: AttachmentConnection;
  /** The time at which the issue was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the issue was automatically closed by the auto pruning process. */
  autoClosedAt?: Maybe<Scalars['DateTime']>;
  /**
   * The order of the item in its column on the board.
   * @deprecated Will be removed in near future, please use `sortOrder` instead
   */
  boardOrder: Scalars['Float'];
  /** Suggested branch name for the issue. */
  branchName: Scalars['String'];
  /** The time at which the issue was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** Children of the issue. */
  children: IssueConnection;
  /** Comments associated with the issue. */
  comments: CommentConnection;
  /** The time at which the issue was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the issue. */
  creator?: Maybe<User>;
  /** Returns the number of Attachment resources which are created by customer support ticketing systems (e.g. Zendesk). */
  customerTicketCount: Scalars['Int'];
  /** The cycle that the issue is associated with. */
  cycle?: Maybe<Cycle>;
  /** The issue's description in markdown format. */
  description?: Maybe<Scalars['String']>;
  /** The date at which the issue is due. */
  dueDate?: Maybe<Scalars['TimelessDate']>;
  /** The estimate of the complexity of the issue.. */
  estimate?: Maybe<Scalars['Float']>;
  /** History entries associated with the issue. */
  history: IssueHistoryConnection;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Issue's human readable identifier (e.g. ENG-123). */
  identifier: Scalars['String'];
  /** Integration resources for this issue. */
  integrationResources: IntegrationResourceConnection;
  /** Inverse relations associated with this issue. */
  inverseRelations: IssueRelationConnection;
  /** Labels associated with this issue. */
  labels: IssueLabelConnection;
  /** The issue's unique number. */
  number: Scalars['Float'];
  /** The parent of the issue. */
  parent?: Maybe<Issue>;
  /** Previous identifiers of the issue if it has been moved between teams. */
  previousIdentifiers: Array<Scalars['String']>;
  /** The priority of the issue. */
  priority: Scalars['Float'];
  /** Label for the priority. */
  priorityLabel: Scalars['String'];
  /** The project that the issue is associated with. */
  project?: Maybe<Project>;
  /** Relations associated with this issue. */
  relations: IssueRelationConnection;
  /** The user who snoozed the issue. */
  snoozedBy?: Maybe<User>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  /** The order of the item in relation to other items in the organization. */
  sortOrder: Scalars['Float'];
  /** The time at which the issue was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']>;
  /** The workflow state that the issue is associated with. */
  state: WorkflowState;
  /** The order of the item in the sub-issue list. Only set if the issue has a parent. */
  subIssueSortOrder?: Maybe<Scalars['Float']>;
  /** Users who are subscribed to the issue. */
  subscribers: UserConnection;
  /** The team that the issue is associated with. */
  team: Team;
  /** The issue's title. */
  title: Scalars['String'];
  /** A flag that indicates whether the issue is in the trash bin. */
  trashed?: Maybe<Scalars['Boolean']>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Issue URL. */
  url: Scalars['String'];
};


/** An issue. */
export type IssueAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueChildrenArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueHistoryArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueIntegrationResourcesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueInverseRelationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueRelationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An issue. */
export type IssueSubscribersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type IssueBatchPayload = {
  __typename?: 'IssueBatchPayload';
  /** The issues that were updated. */
  issues: Array<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** [Alpha] Issue filtering options. */
export type IssueCollectionFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<IssueFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<NumberComparator>;
  /** Filters that needs to be matched by all issues. */
  every?: InputMaybe<IssueFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<IssueFilter>>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Filters that needs to be matched by some issues. */
  some?: InputMaybe<IssueFilter>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueConnection = {
  __typename?: 'IssueConnection';
  edges: Array<IssueEdge>;
  nodes: Array<Issue>;
  pageInfo: PageInfo;
};

export type IssueCreateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: InputMaybe<Scalars['String']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: InputMaybe<Scalars['Float']>;
  /** The cycle associated with the issue. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The issue description in markdown format. */
  description?: InputMaybe<Scalars['String']>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSON']>;
  /** The date at which the issue is due. */
  dueDate?: InputMaybe<Scalars['TimelessDate']>;
  /** The estimated complexity of the issue. */
  estimate?: InputMaybe<Scalars['Int']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier of the parent issue. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The priority of the issue. */
  priority?: InputMaybe<Scalars['Int']>;
  /** The project associated with the issue. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The comment the issue is referencing. */
  referenceCommentId?: InputMaybe<Scalars['String']>;
  /** The position of the issue related to other issues. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The team state of the issue. */
  stateId?: InputMaybe<Scalars['String']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier or key of the team associated with the issue. */
  teamId: Scalars['String'];
  /** The title of the issue. */
  title: Scalars['String'];
};

export type IssueDescriptionHistory = {
  __typename?: 'IssueDescriptionHistory';
  /** The ID of the author of the change. */
  actorId?: Maybe<Scalars['String']>;
  /** The description data of the issue as a JSON serialized string. */
  descriptionData: Scalars['String'];
  /** The UUID of the change. */
  id: Scalars['String'];
  /** The type of the revision, whether it was the creation or update of the issue. */
  type: Scalars['String'];
  /** The date when the description was updated. */
  updatedAt: Scalars['DateTime'];
};

export type IssueDescriptionHistoryPayload = {
  __typename?: 'IssueDescriptionHistoryPayload';
  /** The issue that was created or updated. */
  history?: Maybe<Array<IssueDescriptionHistory>>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssueEdge = {
  __typename?: 'IssueEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Issue;
};

/** [Alpha] Issue filtering options. */
export type IssueFilter = {
  /** Compound filters, all of which need to be matched by the issue. */
  and?: InputMaybe<Array<IssueFilter>>;
  /** Filters that the issues assignee must satisfy. */
  assignee?: InputMaybe<NullableUserFilter>;
  /** Filters that the issues attachments must satisfy. */
  attachments?: InputMaybe<AttachmentFilter>;
  /** Comparator for the issues auto archived at date. */
  autoArchivedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues auto closed at date. */
  autoClosedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues canceled at date. */
  canceledAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the child issues must satisfy. */
  children?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the issues comments must satisfy. */
  comments?: InputMaybe<CommentCollectionFilter>;
  /** Comparator for the issues completed at date. */
  completedAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issues creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that the issues cycle must satisfy. */
  cycle?: InputMaybe<NullableCycleFilter>;
  /** Comparator for the issues description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the issues due date. */
  dueDate?: InputMaybe<NullableTimelessDateComparator>;
  /** Comparator for the issues estimate. */
  estimate?: InputMaybe<NumberComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that issue labels must satisfy. */
  labels?: InputMaybe<IssueLabelCollectionFilter>;
  /** Comparator for the issues number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the issue. */
  or?: InputMaybe<Array<IssueFilter>>;
  /** Comparator for the issues priority. */
  priority?: InputMaybe<NullableNumberComparator>;
  /** Filters that the issues project must satisfy. */
  project?: InputMaybe<NullableProjectFilter>;
  /** Filters that the issues snoozer must satisfy. */
  snoozedBy?: InputMaybe<NullableUserFilter>;
  /** Comparator for the issues snoozed until date. */
  snoozedUntilAt?: InputMaybe<NullableDateComparator>;
  /** Comparator for the issues started at date. */
  startedAt?: InputMaybe<NullableDateComparator>;
  /** Filters that the issues state must satisfy. */
  state?: InputMaybe<WorkflowStateFilter>;
  /** Filters that the issues team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the issues title. */
  title?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** A record of changes to an issue. */
export type IssueHistory = Node & {
  __typename?: 'IssueHistory';
  /** The user who made these changes. If null, possibly means that the change made by an integration. */
  actor?: Maybe<User>;
  /** ID's of labels that were added. */
  addedLabelIds?: Maybe<Array<Scalars['String']>>;
  /** Whether the issue was archived or un-archived. */
  archived?: Maybe<Scalars['Boolean']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  autoArchived?: Maybe<Scalars['Boolean']>;
  autoClosed?: Maybe<Scalars['Boolean']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user from whom the issue was re-assigned from. */
  fromAssignee?: Maybe<User>;
  /** The previous cycle of the issue. */
  fromCycle?: Maybe<Cycle>;
  /** What the due date was changed from */
  fromDueDate?: Maybe<Scalars['TimelessDate']>;
  /** What the estimate was changed from. */
  fromEstimate?: Maybe<Scalars['Float']>;
  /** The previous parent of the issue. */
  fromParent?: Maybe<Issue>;
  /** What the priority was changed from. */
  fromPriority?: Maybe<Scalars['Float']>;
  /** The previous project of the issue. */
  fromProject?: Maybe<Project>;
  /** The previous workflow state of the issue. */
  fromState?: Maybe<WorkflowState>;
  /** The team from which the issue was moved from. */
  fromTeam?: Maybe<Team>;
  /** What the title was changed from. */
  fromTitle?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue that was changed. */
  issue: Issue;
  /** The import record. */
  issueImport?: Maybe<IssueImport>;
  /** Changed issue relationships. */
  relationChanges?: Maybe<Array<IssueRelationHistoryPayload>>;
  /** ID's of labels that were removed. */
  removedLabelIds?: Maybe<Array<Scalars['String']>>;
  /** Information about the integration or application which created this history entry. */
  source?: Maybe<Scalars['JSONObject']>;
  /** The user to whom the issue was assigned to. */
  toAssignee?: Maybe<User>;
  /** The new cycle of the issue. */
  toCycle?: Maybe<Cycle>;
  /** What the due date was changed to */
  toDueDate?: Maybe<Scalars['TimelessDate']>;
  /** What the estimate was changed to. */
  toEstimate?: Maybe<Scalars['Float']>;
  /** The new parent of the issue. */
  toParent?: Maybe<Issue>;
  /** What the priority was changed to. */
  toPriority?: Maybe<Scalars['Float']>;
  /** The new project of the issue. */
  toProject?: Maybe<Project>;
  /** The new workflow state of the issue. */
  toState?: Maybe<WorkflowState>;
  /** The team to which the issue was moved to. */
  toTeam?: Maybe<Team>;
  /** What the title was changed to. */
  toTitle?: Maybe<Scalars['String']>;
  /** Whether the issue was trashed or un-trashed. */
  trashed?: Maybe<Scalars['Boolean']>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Whether the issue's description was updated. */
  updatedDescription?: Maybe<Scalars['Boolean']>;
};

export type IssueHistoryConnection = {
  __typename?: 'IssueHistoryConnection';
  edges: Array<IssueHistoryEdge>;
  nodes: Array<IssueHistory>;
  pageInfo: PageInfo;
};

export type IssueHistoryEdge = {
  __typename?: 'IssueHistoryEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IssueHistory;
};

/** An import job for data from an external service */
export type IssueImport = Node & {
  __typename?: 'IssueImport';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The id for the user that started the job. */
  creatorId: Scalars['String'];
  /** User readable error message, if one has occurred during the import. */
  error?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The data mapping configuration for the import job. */
  mapping?: Maybe<Scalars['JSONObject']>;
  /** The service from which data will be imported. */
  service: Scalars['String'];
  /** The status for the import job. */
  status: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IssueImportDeletePayload = {
  __typename?: 'IssueImportDeletePayload';
  /** The import job that was deleted. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Issue import mapping input */
export type IssueImportMappingInput = {
  /** The mapping configuration for epics */
  epics?: InputMaybe<Scalars['JSONObject']>;
  /** The mapping configuration for users */
  users?: InputMaybe<Scalars['JSONObject']>;
  /** The mapping configuration for workflow states */
  workflowStates?: InputMaybe<Scalars['JSONObject']>;
};

export type IssueImportPayload = {
  __typename?: 'IssueImportPayload';
  /** The import job that was created or updated. */
  issueImport?: Maybe<IssueImport>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssueImportUpdateInput = {
  /** The mapping configuration for the import. */
  mapping: Scalars['JSONObject'];
};

/** Labels that can be associated with issues. */
export type IssueLabel = Node & {
  __typename?: 'IssueLabel';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The label's color as a HEX string. */
  color: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the label. */
  creator?: Maybe<User>;
  /** The label's description. */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Issues associated with the label. */
  issues: IssueConnection;
  /** The label's name. */
  name: Scalars['String'];
  /** @deprecated Workspace labels are identified by their team being null. */
  organization?: Maybe<Organization>;
  /** The team that the label is associated with. If null, the label is associated with the global workspace.. */
  team?: Maybe<Team>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};


/** Labels that can be associated with issues. */
export type IssueLabelIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** [Alpha] Issue label filtering options. */
export type IssueLabelCollectionFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: InputMaybe<Array<IssueLabelFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issue labels creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Filters that needs to be matched by all issue labels. */
  every?: InputMaybe<IssueLabelFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the label. */
  or?: InputMaybe<Array<IssueLabelFilter>>;
  /** Filters that needs to be matched by some issue labels. */
  some?: InputMaybe<IssueLabelFilter>;
  /** Filters that the issue labels team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueLabelConnection = {
  __typename?: 'IssueLabelConnection';
  edges: Array<IssueLabelEdge>;
  nodes: Array<IssueLabel>;
  pageInfo: PageInfo;
};

export type IssueLabelCreateInput = {
  /** The color of the label. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the label. */
  description?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the label. */
  name: Scalars['String'];
  /** [Internal] Whether to replace all team-specific labels with the same name with this newly created workspace label. */
  replaceTeamLabels?: InputMaybe<Scalars['Boolean']>;
  /** The team associated with the label. If not given, the label will be associated with the entire workspace. */
  teamId?: InputMaybe<Scalars['String']>;
};

export type IssueLabelEdge = {
  __typename?: 'IssueLabelEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IssueLabel;
};

/** [Alpha] Issue label filtering options. */
export type IssueLabelFilter = {
  /** Compound filters, all of which need to be matched by the label. */
  and?: InputMaybe<Array<IssueLabelFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the issue labels creator must satisfy. */
  creator?: InputMaybe<NullableUserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the label. */
  or?: InputMaybe<Array<IssueLabelFilter>>;
  /** Filters that the issue labels team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type IssueLabelPayload = {
  __typename?: 'IssueLabelPayload';
  /** The label that was created or updated. */
  issueLabel: IssueLabel;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssueLabelUpdateInput = {
  /** The color of the label. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the label. */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the label. */
  name?: InputMaybe<Scalars['String']>;
};

export type IssuePayload = {
  __typename?: 'IssuePayload';
  /** The issue that was created or updated. */
  issue?: Maybe<Issue>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type IssuePriorityValue = {
  __typename?: 'IssuePriorityValue';
  /** Priority's label. */
  label: Scalars['String'];
  /** Priority's number value. */
  priority: Scalars['Int'];
};

/** A relation between two issues. */
export type IssueRelation = Node & {
  __typename?: 'IssueRelation';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue whose relationship is being described. */
  issue: Issue;
  /** The related issue. */
  relatedIssue: Issue;
  /** The relationship of the issue with the related issue. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type IssueRelationConnection = {
  __typename?: 'IssueRelationConnection';
  edges: Array<IssueRelationEdge>;
  nodes: Array<IssueRelation>;
  pageInfo: PageInfo;
};

export type IssueRelationCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the issue that is related to another issue. */
  issueId: Scalars['String'];
  /** The identifier of the related issue. */
  relatedIssueId: Scalars['String'];
  /** The type of relation of the issue to the related issue. */
  type: IssueRelationType;
};

export type IssueRelationEdge = {
  __typename?: 'IssueRelationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: IssueRelation;
};

/** Issue relation history's payload */
export type IssueRelationHistoryPayload = {
  __typename?: 'IssueRelationHistoryPayload';
  /** The identifier of the related issue. */
  identifier: Scalars['String'];
  /** The type of the change. */
  type: Scalars['String'];
};

export type IssueRelationPayload = {
  __typename?: 'IssueRelationPayload';
  /** The issue relation that was created or updated. */
  issueRelation: IssueRelation;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The type of the issue relation. */
export enum IssueRelationType {
  Blocks = 'blocks',
  Duplicate = 'duplicate',
  Related = 'related'
}

export type IssueRelationUpdateInput = {
  /** The identifier of the issue that is related to another issue. */
  issueId?: InputMaybe<Scalars['String']>;
  /** The identifier of the related issue. */
  relatedIssueId?: InputMaybe<Scalars['String']>;
  /** The type of relation of the issue to the related issue. */
  type?: InputMaybe<Scalars['String']>;
};

export type IssueUpdateInput = {
  /** The identifier of the user to assign the issue to. */
  assigneeId?: InputMaybe<Scalars['String']>;
  /** The position of the issue in its column on the board view. */
  boardOrder?: InputMaybe<Scalars['Float']>;
  /** The cycle associated with the issue. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The issue description in markdown format. */
  description?: InputMaybe<Scalars['String']>;
  /** The issue description as a Prosemirror document. */
  descriptionData?: InputMaybe<Scalars['JSON']>;
  /** [DEPRECATED] Document version for backwards compatibility. */
  documentVersion?: InputMaybe<Scalars['Int']>;
  /** The date at which the issue is due. */
  dueDate?: InputMaybe<Scalars['TimelessDate']>;
  /** The estimated complexity of the issue. */
  estimate?: InputMaybe<Scalars['Int']>;
  /** The identifiers of the issue labels associated with this ticket. */
  labelIds?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier of the parent issue. */
  parentId?: InputMaybe<Scalars['String']>;
  /** The priority of the issue. */
  priority?: InputMaybe<Scalars['Int']>;
  /** The project associated with the issue. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The identifier of the user who snoozed the issue. */
  snoozedById?: InputMaybe<Scalars['String']>;
  /** The time until an issue will be snoozed in Triage view. */
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
  /** The position of the issue related to other issues. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** The team state of the issue. */
  stateId?: InputMaybe<Scalars['String']>;
  /** The position of the issue in parent's sub-issue list. */
  subIssueSortOrder?: InputMaybe<Scalars['Float']>;
  /** The identifiers of the users subscribing to this ticket. */
  subscriberIds?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier or key of the team associated with the issue. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The issue title. */
  title?: InputMaybe<Scalars['String']>;
  /** Wether the issue has been trashed. */
  trashed?: InputMaybe<Scalars['Boolean']>;
};

export type JiraConfigurationInput = {
  /** The Jira personal access token. */
  accessToken: Scalars['String'];
  /** The Jira user's email address. */
  email: Scalars['String'];
  /** The Jira installation hostname. */
  hostname: Scalars['String'];
  /** The Jira project keys to scope the integration to. */
  project?: InputMaybe<Scalars['String']>;
};

/** Tuple for mapping Jira projects to Linear teams. */
export type JiraLinearMapping = {
  __typename?: 'JiraLinearMapping';
  /** The Jira id for this project. */
  jiraProjectId: Scalars['String'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String'];
};

export type JiraLinearMappingInput = {
  /** The Jira id for this project. */
  jiraProjectId: Scalars['String'];
  /** The Linear team id to map to the given project. */
  linearTeamId: Scalars['String'];
};

/** Metadata about a Jira project. */
export type JiraProjectData = {
  __typename?: 'JiraProjectData';
  /** The Jira id for this project. */
  id: Scalars['String'];
  /** The Jira key for this project, such as ENG. */
  key: Scalars['String'];
  /** The Jira name for this project, such as Engineering. */
  name: Scalars['String'];
};

export type JiraProjectDataInput = {
  /** The Jira id for this project. */
  id: Scalars['String'];
  /** The Jira key for this project, such as ENG. */
  key: Scalars['String'];
  /** The Jira name for this project, such as Engineering. */
  name: Scalars['String'];
};

/** Jira specific settings. */
export type JiraSettings = {
  __typename?: 'JiraSettings';
  /** The mapping of Jira project id => Linear team id. */
  projectMapping?: Maybe<Array<JiraLinearMapping>>;
  /** The Jira projects for the organization. */
  projects: Array<JiraProjectData>;
};

export type JiraSettingsInput = {
  /** The mapping of Jira project id => Linear team id. */
  projectMapping?: InputMaybe<Array<JiraLinearMappingInput>>;
  /** The Jira projects for the organization. */
  projects: Array<JiraProjectDataInput>;
};

export type JoinOrganizationInput = {
  /** The identifier of the organization. */
  organizationId: Scalars['String'];
};

/** A milestone that contains projects. */
export type Milestone = Node & {
  __typename?: 'Milestone';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The name of the milestone. */
  name: Scalars['String'];
  /** The organization that the milestone belongs to. */
  organization: Organization;
  /** Projects associated with the milestone. */
  projects: ProjectConnection;
  /** The sort order for the milestone. */
  sortOrder: Scalars['Float'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};


/** A milestone that contains projects. */
export type MilestoneProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type MilestoneConnection = {
  __typename?: 'MilestoneConnection';
  edges: Array<MilestoneEdge>;
  nodes: Array<Milestone>;
  pageInfo: PageInfo;
};

export type MilestoneCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the milestone. */
  name: Scalars['String'];
  /** The sort order of the milestone. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type MilestoneEdge = {
  __typename?: 'MilestoneEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Milestone;
};

/** [Alpha] Milestone filtering options. */
export type MilestoneFilter = {
  /** Compound filters, all of which need to be matched by the milestone. */
  and?: InputMaybe<Array<MilestoneFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the milestone. */
  or?: InputMaybe<Array<MilestoneFilter>>;
  /** Filters that the milestones projects must satisfy. */
  projects?: InputMaybe<ProjectCollectionFilter>;
  /** Comparator for the milestone sort order. */
  sortOrder?: InputMaybe<NumberComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type MilestonePayload = {
  __typename?: 'MilestonePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The milesteone that was created or updated. */
  milestone?: Maybe<Milestone>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type MilestoneUpdateInput = {
  /** The name of the milestone. */
  name?: InputMaybe<Scalars['String']>;
  /** The sort order of the milestone. */
  sortOrder?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** [Internal] Creates a new API key. */
  apiKeyCreate: ApiKeyPayload;
  /** [Internal] Deletes an API key. */
  apiKeyDelete: ArchivePayload;
  /**
   * [DEPRECATED] Archives an issue attachment.
   * @deprecated This mutation is deprecated, please use `attachmentDelete` instead
   */
  attachmentArchive: ArchivePayload;
  /** [Alpha] Creates a new attachment, or updates existing if the same `url` and `issueId` is used. */
  attachmentCreate: AttachmentPayload;
  /** [Alpha] Deletes an issue attachment. */
  attachmentDelete: ArchivePayload;
  /** Link an existing Front conversation to an issue. */
  attachmentLinkFront: FrontAttachmentPayload;
  /** Link an existing Intercom conversation to an issue. */
  attachmentLinkIntercom: AttachmentPayload;
  /** Link an existing Jira issue to an issue. */
  attachmentLinkJiraIssue: AttachmentPayload;
  /** Link any url to an issue. */
  attachmentLinkURL: AttachmentPayload;
  /** Link an existing Zendesk ticket to an issue. */
  attachmentLinkZendesk: AttachmentPayload;
  /** [Alpha] Updates an existing issue attachment. */
  attachmentUpdate: AttachmentPayload;
  /** Updates the billing email address for the customer. */
  billingEmailUpdate: BillingEmailPayload;
  /** Creates a call room for an issue or returns an existing call room. */
  callRoomCreate: CallRoomPayload;
  /** Update collaborative document with client steps. */
  collaborativeDocumentUpdate: CollaborationDocumentUpdatePayload;
  /** Creates a new comment. */
  commentCreate: CommentPayload;
  /** Deletes a comment. */
  commentDelete: ArchivePayload;
  /** Updates a comment. */
  commentUpdate: CommentPayload;
  /** Saves user message. */
  contactCreate: ContactPayload;
  /** Create CSV export report for the organization. */
  createCsvExportReport: CreateCsvExportReportPayload;
  /** Creates an organization from onboarding. */
  createOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Creates a new custom view. */
  customViewCreate: CustomViewPayload;
  /** Deletes a custom view. */
  customViewDelete: ArchivePayload;
  /** Updates a custom view. */
  customViewUpdate: CustomViewPayload;
  /** Archives a cycle. */
  cycleArchive: ArchivePayload;
  /** Creates a new cycle. */
  cycleCreate: CyclePayload;
  /** Updates a cycle. */
  cycleUpdate: CyclePayload;
  /** [Internal] Create the OAuth test applications in development. */
  debugCreateOAuthApps: DebugPayload;
  /** [Internal] Create the SAML test organization in development. */
  debugCreateSAMLOrg: DebugPayload;
  /** [Internal] Create test subscription in development. */
  debugCreateSubscription: DebugPayload;
  /** Always fails with internal error. Used to debug logging. */
  debugFailWithInternalError: DebugPayload;
  /** [Internal] Always logs an error to Sentry as warning. Used to debug logging. */
  debugFailWithWarning: DebugPayload;
  /** Creates a new document. */
  documentCreate: DocumentPayload;
  /** Deletes a document. */
  documentDelete: ArchivePayload;
  /** Updates a document. */
  documentUpdate: DocumentPayload;
  /** Subscribes the email to the newsletter. */
  emailSubscribe: EmailSubscribePayload;
  /** Authenticates a user account via email and authentication token. */
  emailTokenUserAccountAuth: AuthResolverResponse;
  /** Unsubscribes the user from one type of emails. */
  emailUnsubscribe: EmailUnsubscribePayload;
  /** Finds or creates a new user account by email and sends an email with token. */
  emailUserAccountAuthChallenge: EmailUserAccountAuthChallengeResponse;
  /** Creates a custom emoji. */
  emojiCreate: EmojiPayload;
  /** Deletes an emoji. */
  emojiDelete: ArchivePayload;
  /** [Deprecated] Creates a new event. */
  eventCreate: EventPayload;
  /** Creates a new favorite (project, cycle etc). */
  favoriteCreate: FavoritePayload;
  /** Deletes a favorite reference. */
  favoriteDelete: ArchivePayload;
  /** Updates a favorite. */
  favoriteUpdate: FavoritePayload;
  /** Saves user feedback. */
  feedbackCreate: FeedbackPayload;
  /** XHR request payload to upload an images, video and other attachments directly to Linear's cloud storage. */
  fileUpload: UploadPayload;
  /** Authenticate user account through Google OAuth. This is the 2nd step of OAuth flow. */
  googleUserAccountAuth: AuthResolverResponse;
  /** Upload an image from an URL to Linear. */
  imageUploadFromUrl: ImageUploadFromUrlPayload;
  /** Deletes an integration. */
  integrationDelete: ArchivePayload;
  /** Integrates the organization with Figma. */
  integrationFigma: IntegrationPayload;
  /** Integrates the organization with Front. */
  integrationFront: IntegrationPayload;
  /** Generates a webhook for the GitHub commit integration. */
  integrationGithubCommitCreate: IntegrationPayload;
  /** Connects the organization with the GitHub App. */
  integrationGithubConnect: IntegrationPayload;
  /** Connects the organization with a GitLab Access Token. */
  integrationGitlabConnect: IntegrationPayload;
  /** Integrates the organization with Google Sheets. */
  integrationGoogleSheets: IntegrationPayload;
  /** Integrates the organization with Intercom. */
  integrationIntercom: IntegrationPayload;
  /** Disconnects the organization from Intercom. */
  integrationIntercomDelete: IntegrationPayload;
  /**
   * [DEPRECATED] Updates settings on the Intercom integration.
   * @deprecated This mutation is deprecated, please use `integrationSettingsUpdate` instead
   */
  integrationIntercomSettingsUpdate: IntegrationPayload;
  /** Enables Loom integration for the organization. */
  integrationLoom: IntegrationPayload;
  /** Archives an integration resource. */
  integrationResourceArchive: ArchivePayload;
  /** Integrates the organization with Sentry. */
  integrationSentryConnect: IntegrationPayload;
  /** [INTERNAL] Updates the integration. */
  integrationSettingsUpdate: IntegrationPayload;
  /** Integrates the organization with Slack. */
  integrationSlack: IntegrationPayload;
  /** Imports custom emojis from your Slack workspace. */
  integrationSlackImportEmojis: IntegrationPayload;
  /** Integrates your personal notifications with Slack. */
  integrationSlackPersonal: IntegrationPayload;
  /** Slack webhook integration. */
  integrationSlackPost: IntegrationPayload;
  /** Slack integration for project notifications. */
  integrationSlackProjectPost: IntegrationPayload;
  /** Integrates the organization with Zendesk. */
  integrationZendesk: IntegrationPayload;
  /** Archives an issue. */
  issueArchive: ArchivePayload;
  /** Updates multiple issues at once. */
  issueBatchUpdate: IssueBatchPayload;
  /** Creates a new issue. */
  issueCreate: IssuePayload;
  /** Deletes (trashes) an issue. */
  issueDelete: ArchivePayload;
  /** Kicks off an Asana import job. */
  issueImportCreateAsana: IssueImportPayload;
  /** Kicks off a Clubhouse import job. */
  issueImportCreateClubhouse: IssueImportPayload;
  /** Kicks off a GitHub import job. */
  issueImportCreateGithub: IssueImportPayload;
  /** Kicks off a Jira import job. */
  issueImportCreateJira: IssueImportPayload;
  /** Deletes an import job. */
  issueImportDelete: IssueImportDeletePayload;
  /** Kicks off import processing. */
  issueImportProcess: IssueImportPayload;
  /** Updates the mapping for the issue import. */
  issueImportUpdate: IssueImportPayload;
  /** Archives an issue label. */
  issueLabelArchive: ArchivePayload;
  /** Creates a new label. */
  issueLabelCreate: IssueLabelPayload;
  /** Updates an label. */
  issueLabelUpdate: IssueLabelPayload;
  /** Creates a new issue relation. */
  issueRelationCreate: IssueRelationPayload;
  /** Deletes an issue relation. */
  issueRelationDelete: ArchivePayload;
  /** Updates an issue relation. */
  issueRelationUpdate: IssueRelationPayload;
  /** Unarchives an issue. */
  issueUnarchive: ArchivePayload;
  /** Updates an issue. */
  issueUpdate: IssuePayload;
  /** [INTERNAL] Connects the organization with a Jira Personal Access Token. */
  jiraIntegrationConnect: IntegrationPayload;
  /** Join an organization from onboarding. */
  joinOrganizationFromOnboarding: CreateOrJoinOrganizationResponse;
  /** Leave an organization. */
  leaveOrganization: CreateOrJoinOrganizationResponse;
  /** Creates a new milestone. */
  milestoneCreate: MilestonePayload;
  /** Deletes a milestone. */
  milestoneDelete: ArchivePayload;
  /** Updates a milestone. */
  milestoneUpdate: MilestonePayload;
  /** Archives a notification. */
  notificationArchive: ArchivePayload;
  /** Creates a notification. */
  notificationCreate: NotificationPayload;
  /** Creates a new notification subscription for a team or a project. */
  notificationSubscriptionCreate: NotificationSubscriptionPayload;
  /** Deletes a notification subscription reference. */
  notificationSubscriptionDelete: ArchivePayload;
  /** Unarchives a notification. */
  notificationUnarchive: ArchivePayload;
  /** Updates a notification. */
  notificationUpdate: NotificationPayload;
  /** [Internal] Authenticates an auth string by the user. */
  oauthAuthStringAuthorize: OauthAuthStringAuthorizePayload;
  /** [Internal] Creates a temporary authentication code that can be exchanged for an OAuth token. */
  oauthAuthStringChallenge: OauthAuthStringChallengePayload;
  /** [Internal] Returns an access token once the auth string has been authenticated. */
  oauthAuthStringCheck: OauthAuthStringCheckPayload;
  /** Archives an OAuth client. */
  oauthClientArchive: ArchivePayload;
  /** Creates a new OAuth client. */
  oauthClientCreate: OauthClientPayload;
  /** Updates an OAuth client. */
  oauthClientRotateSecret: RotateSecretPayload;
  /** Updates an OAuth client. */
  oauthClientUpdate: OauthClientPayload;
  /** Revokes an OAuth token. */
  oauthTokenRevoke: OauthTokenRevokePayload;
  /** Cancels the deletion of an organization. Administrator privileges required. */
  organizationCancelDelete: OrganizationCancelDeletePayload;
  /** Delete's an organization. Administrator privileges required. */
  organizationDelete: OrganizationDeletePayload;
  /** Get an organization's delete confirmation token. Administrator privileges required. */
  organizationDeleteChallenge: OrganizationDeletePayload;
  /** Adds a domain to be allowed for an organization. */
  organizationDomainCreate: OrganizationDomainPayload;
  /** Deletes a domain. */
  organizationDomainDelete: ArchivePayload;
  /** Verifies a domain to be added to an organization. */
  organizationDomainVerify: OrganizationDomainPayload;
  /** Creates a new organization invite. */
  organizationInviteCreate: OrganizationInvitePayload;
  /** Deletes an organization invite. */
  organizationInviteDelete: ArchivePayload;
  /** Updates the user's organization. */
  organizationUpdate: OrganizationPayload;
  /** Archives a project. */
  projectArchive: ArchivePayload;
  /** Creates a new project. */
  projectCreate: ProjectPayload;
  /** Creates a new project link. */
  projectLinkCreate: ProjectLinkPayload;
  /** Deletes a project link. */
  projectLinkDelete: ArchivePayload;
  /** Updates a project link. */
  projectLinkUpdate: ProjectLinkPayload;
  /** Unarchives a project. */
  projectUnarchive: ArchivePayload;
  /** Updates a project. */
  projectUpdate: ProjectPayload;
  /** Creates a push subscription. */
  pushSubscriptionCreate: PushSubscriptionPayload;
  /** Deletes a push subscription. */
  pushSubscriptionDelete: PushSubscriptionPayload;
  /** Creates a new reaction. */
  reactionCreate: ReactionPayload;
  /** Deletes a reaction. */
  reactionDelete: ArchivePayload;
  /** Manually update Google Sheets data. */
  refreshGoogleSheetsData: IntegrationPayload;
  /** Re-send an organization invite. */
  resendOrganizationInvite: ArchivePayload;
  /** Authenticates a user account via email and authentication token for SAML. */
  samlTokenUserAccountAuth: AuthResolverResponse;
  /** [Internal] Archives a subscription. */
  subscriptionArchive: ArchivePayload;
  /** [Internal] Creates a subscription session. Used internally to integrate with Stripe. */
  subscriptionSessionCreate: SubscriptionSessionPayload;
  /** [Internal] Updates a subscription. */
  subscriptionUpdate: SubscriptionPayload;
  /** [Internal] Creates a subscription update session. Used internally to integrate with Stripe. */
  subscriptionUpdateSessionCreate: SubscriptionSessionPayload;
  /** [Internal] Upgrades a subscription plan. */
  subscriptionUpgrade: SubscriptionPayload;
  /** Creates a new team. The user who creates the team will automatically be added as a member to the newly created team. */
  teamCreate: TeamPayload;
  /** Deletes a team. */
  teamDelete: ArchivePayload;
  /** Deletes a previously used team key. */
  teamKeyDelete: ArchivePayload;
  /** Creates a new team membership. */
  teamMembershipCreate: TeamMembershipPayload;
  /** Deletes a team membership. */
  teamMembershipDelete: ArchivePayload;
  /** Updates a team membership. */
  teamMembershipUpdate: TeamMembershipPayload;
  /** Updates a team. */
  teamUpdate: TeamPayload;
  /** Creates a new template. */
  templateCreate: TemplatePayload;
  /** Deletes a template. */
  templateDelete: ArchivePayload;
  /** Updates an existing template. */
  templateUpdate: TemplatePayload;
  /** Makes user a regular user. Can only be called by an admin. */
  userDemoteAdmin: UserAdminPayload;
  /** Updates a user's settings flag. */
  userFlagUpdate: UserSettingsFlagPayload;
  /** Makes user an admin. Can only be called by an admin. */
  userPromoteAdmin: UserAdminPayload;
  /** [Deprecated] Updates a user's settings flag. */
  userSettingsFlagIncrement: UserSettingsFlagPayload;
  /** Resets user's setting flags. */
  userSettingsFlagsReset: UserSettingsFlagsResetPayload;
  /** Updates the user's settings. */
  userSettingsUpdate: UserSettingsPayload;
  /** Subscribes user to changelog newsletter. */
  userSubscribeToNewsletter: UserSubscribeToNewsletterPayload;
  /** Suspends a user. Can only be called by an admin. */
  userSuspend: UserAdminPayload;
  /** Un-suspends a user. Can only be called by an admin. */
  userUnsuspend: UserAdminPayload;
  /** Updates a user. Only available to organization admins and the user themselves. */
  userUpdate: UserPayload;
  /** Creates a new ViewPreferences object. */
  viewPreferencesCreate: ViewPreferencesPayload;
  /** Deletes a ViewPreferences. */
  viewPreferencesDelete: ArchivePayload;
  /** Updates an existing ViewPreferences object. */
  viewPreferencesUpdate: ViewPreferencesPayload;
  /** Creates a new webhook. */
  webhookCreate: WebhookPayload;
  /** Deletes a Webhook. */
  webhookDelete: ArchivePayload;
  /** Updates an existing Webhook. */
  webhookUpdate: WebhookPayload;
  /** Archives a state. Only states with issues that have all been archived can be archived. */
  workflowStateArchive: ArchivePayload;
  /** Creates a new state, adding it to the workflow of a team. */
  workflowStateCreate: WorkflowStatePayload;
  /** Updates a state. */
  workflowStateUpdate: WorkflowStatePayload;
};


export type MutationApiKeyCreateArgs = {
  input: ApiKeyCreateInput;
};


export type MutationApiKeyDeleteArgs = {
  id: Scalars['String'];
};


export type MutationAttachmentArchiveArgs = {
  id: Scalars['String'];
};


export type MutationAttachmentCreateArgs = {
  input: AttachmentCreateInput;
};


export type MutationAttachmentDeleteArgs = {
  id: Scalars['String'];
};


export type MutationAttachmentLinkFrontArgs = {
  conversationId: Scalars['String'];
  issueId: Scalars['String'];
};


export type MutationAttachmentLinkIntercomArgs = {
  conversationId: Scalars['String'];
  issueId: Scalars['String'];
};


export type MutationAttachmentLinkJiraIssueArgs = {
  issueId: Scalars['String'];
  jiraIssueId: Scalars['String'];
};


export type MutationAttachmentLinkUrlArgs = {
  issueId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};


export type MutationAttachmentLinkZendeskArgs = {
  issueId: Scalars['String'];
  ticketId: Scalars['String'];
};


export type MutationAttachmentUpdateArgs = {
  id: Scalars['String'];
  input: AttachmentUpdateInput;
};


export type MutationBillingEmailUpdateArgs = {
  input: BillingEmailUpdateInput;
};


export type MutationCallRoomCreateArgs = {
  input: CallRoomCreateInput;
};


export type MutationCollaborativeDocumentUpdateArgs = {
  input: CollaborationDocumentUpdateInput;
};


export type MutationCommentCreateArgs = {
  input: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['String'];
};


export type MutationCommentUpdateArgs = {
  id: Scalars['String'];
  input: CommentUpdateInput;
};


export type MutationContactCreateArgs = {
  input: ContactCreateInput;
};


export type MutationCreateCsvExportReportArgs = {
  includePrivateTeamIds?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationCreateOrganizationFromOnboardingArgs = {
  input: CreateOrganizationInput;
  survey?: InputMaybe<OnboardingCustomerSurvey>;
};


export type MutationCustomViewCreateArgs = {
  input: CustomViewCreateInput;
};


export type MutationCustomViewDeleteArgs = {
  id: Scalars['String'];
};


export type MutationCustomViewUpdateArgs = {
  id: Scalars['String'];
  input: CustomViewUpdateInput;
};


export type MutationCycleArchiveArgs = {
  id: Scalars['String'];
};


export type MutationCycleCreateArgs = {
  input: CycleCreateInput;
};


export type MutationCycleUpdateArgs = {
  id: Scalars['String'];
  input: CycleUpdateInput;
};


export type MutationDebugCreateSubscriptionArgs = {
  subscriptionType: Scalars['String'];
};


export type MutationDocumentCreateArgs = {
  input: DocumentCreateInput;
};


export type MutationDocumentDeleteArgs = {
  id: Scalars['String'];
};


export type MutationDocumentUpdateArgs = {
  id: Scalars['String'];
  input: DocumentUpdateInput;
};


export type MutationEmailSubscribeArgs = {
  input: EmailSubscribeInput;
};


export type MutationEmailTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationEmailUnsubscribeArgs = {
  input: EmailUnsubscribeInput;
};


export type MutationEmailUserAccountAuthChallengeArgs = {
  input: EmailUserAccountAuthChallengeInput;
};


export type MutationEmojiCreateArgs = {
  input: EmojiCreateInput;
};


export type MutationEmojiDeleteArgs = {
  id: Scalars['String'];
};


export type MutationEventCreateArgs = {
  input: EventCreateInput;
};


export type MutationFavoriteCreateArgs = {
  input: FavoriteCreateInput;
};


export type MutationFavoriteDeleteArgs = {
  id: Scalars['String'];
};


export type MutationFavoriteUpdateArgs = {
  id: Scalars['String'];
  input: FavoriteUpdateInput;
};


export type MutationFeedbackCreateArgs = {
  input: FeedbackCreateInput;
};


export type MutationFileUploadArgs = {
  contentType: Scalars['String'];
  filename: Scalars['String'];
  metaData?: InputMaybe<Scalars['JSON']>;
  size: Scalars['Int'];
};


export type MutationGoogleUserAccountAuthArgs = {
  input: GoogleUserAccountAuthInput;
};


export type MutationImageUploadFromUrlArgs = {
  url: Scalars['String'];
};


export type MutationIntegrationDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIntegrationFigmaArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationFrontArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationGithubConnectArgs = {
  installationId: Scalars['String'];
};


export type MutationIntegrationGitlabConnectArgs = {
  accessToken: Scalars['String'];
  gitlabUrl: Scalars['String'];
};


export type MutationIntegrationGoogleSheetsArgs = {
  code: Scalars['String'];
};


export type MutationIntegrationIntercomArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationIntercomSettingsUpdateArgs = {
  input: IntercomSettingsInput;
};


export type MutationIntegrationResourceArchiveArgs = {
  id: Scalars['String'];
};


export type MutationIntegrationSentryConnectArgs = {
  code: Scalars['String'];
  installationId: Scalars['String'];
  organizationSlug: Scalars['String'];
};


export type MutationIntegrationSettingsUpdateArgs = {
  id: Scalars['String'];
  input: IntegrationSettingsInput;
};


export type MutationIntegrationSlackArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
  shouldUseV2Auth?: InputMaybe<Scalars['Boolean']>;
};


export type MutationIntegrationSlackImportEmojisArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationSlackPersonalArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationSlackPostArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
  shouldUseV2Auth?: InputMaybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
};


export type MutationIntegrationSlackProjectPostArgs = {
  code: Scalars['String'];
  projectId: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationIntegrationZendeskArgs = {
  code: Scalars['String'];
  redirectUri: Scalars['String'];
  scope: Scalars['String'];
  subdomain: Scalars['String'];
};


export type MutationIssueArchiveArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationIssueBatchUpdateArgs = {
  ids: Array<Scalars['UUID']>;
  input: IssueUpdateInput;
};


export type MutationIssueCreateArgs = {
  input: IssueCreateInput;
};


export type MutationIssueDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIssueImportCreateAsanaArgs = {
  asanaTeamName: Scalars['String'];
  asanaToken: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']>;
  instantProcess?: InputMaybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
};


export type MutationIssueImportCreateClubhouseArgs = {
  clubhouseTeamName: Scalars['String'];
  clubhouseToken: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']>;
  instantProcess?: InputMaybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
};


export type MutationIssueImportCreateGithubArgs = {
  githubRepoName: Scalars['String'];
  githubRepoOwner: Scalars['String'];
  githubShouldImportOrgProjects?: InputMaybe<Scalars['Boolean']>;
  githubToken: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']>;
  instantProcess?: InputMaybe<Scalars['Boolean']>;
  teamId: Scalars['String'];
};


export type MutationIssueImportCreateJiraArgs = {
  id?: InputMaybe<Scalars['String']>;
  includeClosedIssues?: InputMaybe<Scalars['Boolean']>;
  instantProcess?: InputMaybe<Scalars['Boolean']>;
  jiraEmail: Scalars['String'];
  jiraHostname: Scalars['String'];
  jiraProject: Scalars['String'];
  jiraToken: Scalars['String'];
  teamId: Scalars['String'];
};


export type MutationIssueImportDeleteArgs = {
  issueImportId: Scalars['String'];
};


export type MutationIssueImportProcessArgs = {
  issueImportId: Scalars['String'];
  mapping: Scalars['JSONObject'];
};


export type MutationIssueImportUpdateArgs = {
  id: Scalars['String'];
  input: IssueImportUpdateInput;
};


export type MutationIssueLabelArchiveArgs = {
  id: Scalars['String'];
};


export type MutationIssueLabelCreateArgs = {
  input: IssueLabelCreateInput;
};


export type MutationIssueLabelUpdateArgs = {
  id: Scalars['String'];
  input: IssueLabelUpdateInput;
};


export type MutationIssueRelationCreateArgs = {
  input: IssueRelationCreateInput;
};


export type MutationIssueRelationDeleteArgs = {
  id: Scalars['String'];
};


export type MutationIssueRelationUpdateArgs = {
  id: Scalars['String'];
  input: IssueRelationUpdateInput;
};


export type MutationIssueUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationIssueUpdateArgs = {
  id: Scalars['String'];
  input: IssueUpdateInput;
};


export type MutationJiraIntegrationConnectArgs = {
  input: JiraConfigurationInput;
};


export type MutationJoinOrganizationFromOnboardingArgs = {
  input: JoinOrganizationInput;
};


export type MutationLeaveOrganizationArgs = {
  organizationId: Scalars['String'];
};


export type MutationMilestoneCreateArgs = {
  input: MilestoneCreateInput;
};


export type MutationMilestoneDeleteArgs = {
  id: Scalars['String'];
};


export type MutationMilestoneUpdateArgs = {
  id: Scalars['String'];
  input: MilestoneUpdateInput;
};


export type MutationNotificationArchiveArgs = {
  id: Scalars['String'];
};


export type MutationNotificationCreateArgs = {
  id: Scalars['String'];
  input: NotificationUpdateInput;
};


export type MutationNotificationSubscriptionCreateArgs = {
  input: NotificationSubscriptionCreateInput;
};


export type MutationNotificationSubscriptionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationNotificationUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationNotificationUpdateArgs = {
  id: Scalars['String'];
  input: NotificationUpdateInput;
};


export type MutationOauthAuthStringAuthorizeArgs = {
  appId: Scalars['String'];
  authString: Scalars['String'];
};


export type MutationOauthAuthStringChallengeArgs = {
  appId: Scalars['String'];
  scope: Array<Scalars['String']>;
};


export type MutationOauthAuthStringCheckArgs = {
  appId: Scalars['String'];
  authString: Scalars['String'];
};


export type MutationOauthClientArchiveArgs = {
  id: Scalars['String'];
};


export type MutationOauthClientCreateArgs = {
  input: OauthClientCreateInput;
};


export type MutationOauthClientRotateSecretArgs = {
  id: Scalars['String'];
};


export type MutationOauthClientUpdateArgs = {
  id: Scalars['String'];
  input: OauthClientUpdateInput;
};


export type MutationOauthTokenRevokeArgs = {
  appId: Scalars['String'];
  scope: Array<Scalars['String']>;
};


export type MutationOrganizationDeleteArgs = {
  input: DeleteOrganizationInput;
};


export type MutationOrganizationDomainCreateArgs = {
  input: OrganizationDomainCreateInput;
};


export type MutationOrganizationDomainDeleteArgs = {
  id: Scalars['String'];
};


export type MutationOrganizationDomainVerifyArgs = {
  input: OrganizationDomainVerificationInput;
};


export type MutationOrganizationInviteCreateArgs = {
  input: OrganizationInviteCreateInput;
};


export type MutationOrganizationInviteDeleteArgs = {
  id: Scalars['String'];
};


export type MutationOrganizationUpdateArgs = {
  input: UpdateOrganizationInput;
};


export type MutationProjectArchiveArgs = {
  id: Scalars['String'];
};


export type MutationProjectCreateArgs = {
  input: ProjectCreateInput;
};


export type MutationProjectLinkCreateArgs = {
  input: ProjectLinkCreateInput;
};


export type MutationProjectLinkDeleteArgs = {
  id: Scalars['String'];
};


export type MutationProjectLinkUpdateArgs = {
  id: Scalars['String'];
  input: ProjectLinkUpdateInput;
};


export type MutationProjectUnarchiveArgs = {
  id: Scalars['String'];
};


export type MutationProjectUpdateArgs = {
  id: Scalars['String'];
  input: ProjectUpdateInput;
};


export type MutationPushSubscriptionCreateArgs = {
  input: PushSubscriptionCreateInput;
};


export type MutationPushSubscriptionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationReactionCreateArgs = {
  input: ReactionCreateInput;
};


export type MutationReactionDeleteArgs = {
  id: Scalars['String'];
};


export type MutationRefreshGoogleSheetsDataArgs = {
  id: Scalars['String'];
};


export type MutationResendOrganizationInviteArgs = {
  id: Scalars['String'];
};


export type MutationSamlTokenUserAccountAuthArgs = {
  input: TokenUserAccountAuthInput;
};


export type MutationSubscriptionArchiveArgs = {
  id: Scalars['String'];
};


export type MutationSubscriptionSessionCreateArgs = {
  coupon?: InputMaybe<Scalars['String']>;
  plan: Scalars['String'];
};


export type MutationSubscriptionUpdateArgs = {
  id: Scalars['String'];
  input: SubscriptionUpdateInput;
};


export type MutationSubscriptionUpgradeArgs = {
  id: Scalars['String'];
  type: Scalars['String'];
};


export type MutationTeamCreateArgs = {
  copySettingsFromTeamId?: InputMaybe<Scalars['String']>;
  input: TeamCreateInput;
};


export type MutationTeamDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTeamKeyDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTeamMembershipCreateArgs = {
  input: TeamMembershipCreateInput;
};


export type MutationTeamMembershipDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTeamMembershipUpdateArgs = {
  id: Scalars['String'];
  input: TeamMembershipUpdateInput;
};


export type MutationTeamUpdateArgs = {
  id: Scalars['String'];
  input: TeamUpdateInput;
};


export type MutationTemplateCreateArgs = {
  input: TemplateCreateInput;
};


export type MutationTemplateDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTemplateUpdateArgs = {
  id: Scalars['String'];
  input: TemplateUpdateInput;
};


export type MutationUserDemoteAdminArgs = {
  id: Scalars['String'];
};


export type MutationUserFlagUpdateArgs = {
  flag: UserFlagType;
  operation: UserFlagUpdateOperation;
};


export type MutationUserPromoteAdminArgs = {
  id: Scalars['String'];
};


export type MutationUserSettingsFlagIncrementArgs = {
  flag: Scalars['String'];
};


export type MutationUserSettingsUpdateArgs = {
  id: Scalars['String'];
  input: UserSettingsUpdateInput;
};


export type MutationUserSuspendArgs = {
  id: Scalars['String'];
};


export type MutationUserUnsuspendArgs = {
  id: Scalars['String'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['String'];
  input: UpdateUserInput;
};


export type MutationViewPreferencesCreateArgs = {
  input: ViewPreferencesCreateInput;
};


export type MutationViewPreferencesDeleteArgs = {
  id: Scalars['String'];
};


export type MutationViewPreferencesUpdateArgs = {
  id: Scalars['String'];
  input: ViewPreferencesUpdateInput;
};


export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput;
};


export type MutationWebhookDeleteArgs = {
  id: Scalars['String'];
};


export type MutationWebhookUpdateArgs = {
  id: Scalars['String'];
  input: WebhookUpdateInput;
};


export type MutationWorkflowStateArchiveArgs = {
  id: Scalars['String'];
};


export type MutationWorkflowStateCreateArgs = {
  input: WorkflowStateCreateInput;
};


export type MutationWorkflowStateUpdateArgs = {
  id: Scalars['String'];
  input: WorkflowStateUpdateInput;
};

/** Comparator for strings. */
export type NestedStringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Node = {
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
};

/** A notification sent to a user. */
export type Notification = Node & {
  __typename?: 'Notification';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The comment which the notification is associated with. */
  comment?: Maybe<Comment>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The time at when an email reminder for this notification was sent to the user. Null, if no email
   *     reminder has been sent.
   */
  emailedAt?: Maybe<Scalars['DateTime']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The issue that the notification is associated with. */
  issue: Issue;
  /** Name of the reaction emoji associated with the notification. */
  reactionEmoji?: Maybe<Scalars['String']>;
  /** The time at when the user marked the notification as read. Null, if the the user hasn't read the notification */
  readAt?: Maybe<Scalars['DateTime']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: Maybe<Scalars['DateTime']>;
  /** The team which the notification is associated with. */
  team: Team;
  /** Notification type */
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The recipient of the notification. */
  user: User;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<NotificationEdge>;
  nodes: Array<Notification>;
  pageInfo: PageInfo;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Notification;
};

export type NotificationPayload = {
  __typename?: 'NotificationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The notification that was created or updated. */
  notification: Notification;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Notification subscriptions for models. */
export type NotificationSubscription = Node & {
  __typename?: 'NotificationSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Subscribed project. */
  project?: Maybe<Project>;
  /** Subscribed team. */
  team?: Maybe<Team>;
  /** The type of the subscription. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user associated with notification subscriptions. */
  user: User;
};

export type NotificationSubscriptionConnection = {
  __typename?: 'NotificationSubscriptionConnection';
  edges: Array<NotificationSubscriptionEdge>;
  nodes: Array<NotificationSubscription>;
  pageInfo: PageInfo;
};

export type NotificationSubscriptionCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the project to subscribe to. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The identifier of the team to subscribe to. */
  teamId?: InputMaybe<Scalars['String']>;
};

export type NotificationSubscriptionEdge = {
  __typename?: 'NotificationSubscriptionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: NotificationSubscription;
};

export type NotificationSubscriptionPayload = {
  __typename?: 'NotificationSubscriptionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The notification subscription that was created or updated. */
  notificationSubscription: NotificationSubscription;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type NotificationUpdateInput = {
  /** The time when notification was marked as read. */
  readAt?: InputMaybe<Scalars['DateTime']>;
  /** The time until a notification will be snoozed. After that it will appear in the inbox again. */
  snoozedUntilAt?: InputMaybe<Scalars['DateTime']>;
};

/** [Alpha] Cycle filtering options. */
export type NullableCycleFilter = {
  /** Compound filters, all of which need to be matched by the cycle. */
  and?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle completed at date. */
  completedAt?: InputMaybe<DateComparator>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the cycle ends at date. */
  endsAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the cycles issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the cycle name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Comparator for the cycle number. */
  number?: InputMaybe<NumberComparator>;
  /** Compound filters, one of which need to be matched by the cycle. */
  or?: InputMaybe<Array<CycleFilter>>;
  /** Comparator for the cycle start date. */
  startsAt?: InputMaybe<DateComparator>;
  /** Filters that the cycles team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional dates. */
export type NullableDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['DateTime']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
};

/** [Alpha] User filtering options. */
export type NullableMilestoneFilter = {
  /** Compound filters, all of which need to be matched by the milestone. */
  and?: InputMaybe<Array<MilestoneFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the milestone name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, one of which need to be matched by the milestone. */
  or?: InputMaybe<Array<MilestoneFilter>>;
  /** Filters that the milestones projects must satisfy. */
  projects?: InputMaybe<ProjectCollectionFilter>;
  /** Comparator for the milestone sort order. */
  sortOrder?: InputMaybe<NumberComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional numbers. */
export type NullableNumberComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
};

/** [Alpha] Project filtering options. */
export type NullableProjectFilter = {
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Filters that the projects milestones must satisfy. */
  milestone?: InputMaybe<NullableMilestoneFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectFilter>>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for optional strings. */
export type NullableStringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableTimelessDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['TimelessDate']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['TimelessDate']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['TimelessDate']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['TimelessDate']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['TimelessDate']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['TimelessDate']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['TimelessDate']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['TimelessDate']>>;
  /** Null constraint. Matches any non-null values if the given value is false, otherwise it matches null values. */
  null?: InputMaybe<Scalars['Boolean']>;
};

/** [Alpha] User filtering options. */
export type NullableUserFilter = {
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the users display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the users email. */
  email?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the users name. */
  name?: InputMaybe<StringComparator>;
  /** Filter based on the existence of the relation. */
  null?: InputMaybe<Scalars['Boolean']>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Comparator for numbers. */
export type NumberComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['Float']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['Float']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['Float']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['Float']>>;
};

export type OauthAuthStringAuthorizePayload = {
  __typename?: 'OauthAuthStringAuthorizePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OauthAuthStringChallengePayload = {
  __typename?: 'OauthAuthStringChallengePayload';
  /** The created authentication string. */
  authString: Scalars['String'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OauthAuthStringCheckPayload = {
  __typename?: 'OauthAuthStringCheckPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** Access token for use. */
  token?: Maybe<Scalars['String']>;
};

/** OAuth2 client application */
export type OauthClient = Node & {
  __typename?: 'OauthClient';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** OAuth application's client secret. */
  clientSecret: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Information about the application. */
  description: Scalars['String'];
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer. */
  developerUrl: Scalars['String'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Image of the application. */
  imageUrl: Scalars['String'];
  /** OAuth application's client name. */
  name: Scalars['String'];
  /** Whether the OAuth application is publicly visible, or only visible to the creating workspace. */
  publicEnabled: Scalars['Boolean'];
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The resource types to request when creating new webhooks. */
  webhookResourceTypes: Array<Scalars['String']>;
  /** Webhook URL */
  webhookUrl?: Maybe<Scalars['String']>;
};

export type OauthClientCreateInput = {
  /** User facing description of the application. */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the developer of the application. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** URL for the app icon. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The application's name. */
  name: Scalars['String'];
  /** Whether the OAuth application should be publicly visible, or only visible to the creating workspace. */
  publicEnabled?: InputMaybe<Scalars['Boolean']>;
  /** List of allowed redirect URIs for the application. */
  redirectUris: Array<Scalars['String']>;
  /** List of resources the webhooks should subscribe to. */
  webhookResourceTypes: Array<Scalars['String']>;
  /** The URL that will be called on data changes. */
  webhookUrl?: InputMaybe<Scalars['String']>;
};

export type OauthClientPayload = {
  __typename?: 'OauthClientPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The OAuth client application that was created or updated. */
  oauthClient: OauthClient;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OauthClientUpdateInput = {
  /** User facing description of the application. */
  description?: InputMaybe<Scalars['String']>;
  /** Name of the developer of the application. */
  developer?: InputMaybe<Scalars['String']>;
  /** URL of the developer (homepage or docs). */
  developerUrl?: InputMaybe<Scalars['String']>;
  /** URL for the app icon. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The application's name. */
  name?: InputMaybe<Scalars['String']>;
  /** Whether the OAuth application should be publicly visible, or only visible to the creating workspace. */
  publicEnabled?: InputMaybe<Scalars['Boolean']>;
  /** List of allowed redirect URIs for the application. */
  redirectUris?: InputMaybe<Array<Scalars['String']>>;
  /** List of resources the webhooks should subscribe to. */
  webhookResourceTypes?: InputMaybe<Array<Scalars['String']>>;
  /** The URL that will be called on data changes. */
  webhookUrl?: InputMaybe<Scalars['String']>;
};

export type OauthTokenRevokePayload = {
  __typename?: 'OauthTokenRevokePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OnboardingCustomerSurvey = {
  companyRole?: InputMaybe<Scalars['String']>;
  companySize?: InputMaybe<Scalars['String']>;
};

/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type Organization = Node & {
  __typename?: 'Organization';
  /** Allowed authentication providers, empty array means all are allowed */
  allowedAuthServices: Array<Scalars['String']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Number of issues in the organization. */
  createdIssueCount: Scalars['Int'];
  /** The time at which deletion of the organization was requested. */
  deletionRequestedAt?: Maybe<Scalars['DateTime']>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: Maybe<Scalars['String']>;
  /** Whether the Git integration linkback messages should be sent to private repositories. */
  gitLinkbackMessagesEnabled: Scalars['Boolean'];
  /** Whether the Git integration linkback messages should be sent to public repositories. */
  gitPublicLinkbackMessagesEnabled: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Integrations associated with the organization. */
  integrations: IntegrationConnection;
  /** Labels associated with the organization. */
  labels: IssueLabelConnection;
  /** The organization's logo URL. */
  logoUrl?: Maybe<Scalars['String']>;
  /** Milestones associated with the organization. */
  milestones: MilestoneConnection;
  /** The organization's name. */
  name: Scalars['String'];
  /** Rolling 30-day total upload volume for the organization, in megabytes. */
  periodUploadVolume: Scalars['Float'];
  /** Whether the organization is using a roadmap. */
  roadmapEnabled: Scalars['Boolean'];
  /** Whether SAML authentication is enabled for organization. */
  samlEnabled: Scalars['Boolean'];
  /** The organization's subscription to a paid plan. */
  subscription?: Maybe<Subscription>;
  /** Teams associated with the organization. */
  teams: TeamConnection;
  /** Templates associated with the organization. */
  templates: TemplateConnection;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The organization's unique URL key. */
  urlKey: Scalars['String'];
  /** Number of active users in the organization. */
  userCount: Scalars['Int'];
  /** Users associated with the organization. */
  users: UserConnection;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationMilestonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MilestoneFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationTemplatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organization. Organizations are root-level objects that contain user accounts and teams. */
export type OrganizationUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type OrganizationCancelDeletePayload = {
  __typename?: 'OrganizationCancelDeletePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationDeletePayload = {
  __typename?: 'OrganizationDeletePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Defines the use of a domain by an organization. */
export type OrganizationDomain = Node & {
  __typename?: 'OrganizationDomain';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who added the domain. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Domain name */
  name: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** E-mail used to verify this domain */
  verificationEmail?: Maybe<Scalars['String']>;
  /** Is this domain verified */
  verified: Scalars['Boolean'];
};

export type OrganizationDomainCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The domain name to add. */
  name: Scalars['String'];
  /** The email address to which to send the verification code. */
  verificationEmail: Scalars['String'];
};

export type OrganizationDomainPayload = {
  __typename?: 'OrganizationDomainPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization domain that was created or updated. */
  organizationDomain: OrganizationDomain;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationDomainSimplePayload = {
  __typename?: 'OrganizationDomainSimplePayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationDomainVerificationInput = {
  /** The identifier of the domain being verified. */
  organizationDomainId: Scalars['String'];
  /** The verification code sent via email. */
  verificationCode: Scalars['String'];
};

export type OrganizationExistsPayload = {
  __typename?: 'OrganizationExistsPayload';
  /** Whether the organization exists. */
  exists: Scalars['Boolean'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** An invitation to the organization that has been sent via email. */
export type OrganizationInvite = Node & {
  __typename?: 'OrganizationInvite';
  /** The time at which the invite was accepted. Null, if the invite hasn't been accepted */
  acceptedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The invitees email address. */
  email: Scalars['String'];
  /** The time at which the invite will be expiring. Null, if the invite shouldn't expire */
  expiresAt?: Maybe<Scalars['DateTime']>;
  /** The invite was sent to external address. */
  external: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The user who has accepted the invite. Null, if the invite hasn't been accepted. */
  invitee?: Maybe<User>;
  /** The user who created the invitation. */
  inviter: User;
  /** The organization that the invite is associated with. */
  organization: Organization;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type OrganizationInviteConnection = {
  __typename?: 'OrganizationInviteConnection';
  edges: Array<OrganizationInviteEdge>;
  nodes: Array<OrganizationInvite>;
  pageInfo: PageInfo;
};

export type OrganizationInviteCreateInput = {
  /** The email of the invitee. */
  email: Scalars['String'];
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The message to send to the invitee. */
  message?: InputMaybe<Scalars['String']>;
  /** The teams that the user has been invited to. */
  teamIds?: InputMaybe<Array<Scalars['String']>>;
};

export type OrganizationInviteDetailsPayload = {
  __typename?: 'OrganizationInviteDetailsPayload';
  /** Whether the invite has already been accepted. */
  accepted: Scalars['Boolean'];
  /** When the invite was created. */
  createdAt: Scalars['DateTime'];
  /** The email of the invitee */
  email: Scalars['String'];
  /** Whether the invite has expired. */
  expired: Scalars['Boolean'];
  /** The name of the inviter */
  inviter: Scalars['String'];
  /** ID of the workspace the invite is for. */
  organizationId: Scalars['String'];
  /** URL of the workspace logo the invite is for. */
  organizationLogoUrl?: Maybe<Scalars['String']>;
  /** Name of the workspace the invite is for. */
  organizationName: Scalars['String'];
};

export type OrganizationInviteEdge = {
  __typename?: 'OrganizationInviteEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: OrganizationInvite;
};

export type OrganizationInvitePayload = {
  __typename?: 'OrganizationInvitePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization invite that was created or updated. */
  organizationInvite: OrganizationInvite;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type OrganizationPayload = {
  __typename?: 'OrganizationPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The organization that was created or updated. */
  organization?: Maybe<Organization>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** Cursor representing the last result in the paginated results. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates if there are more results when paginating forward. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates if there are more results when paginating backward. */
  hasPreviousPage: Scalars['Boolean'];
  /** Cursor representing the first result in the paginated results. */
  startCursor?: Maybe<Scalars['String']>;
};

/** By which field should the pagination order by */
export enum PaginationOrderBy {
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt'
}

/** A project. */
export type Project = Node & {
  __typename?: 'Project';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the project was automatically archived by the auto pruning process. */
  autoArchivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the project was moved into canceled state. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The project's color. */
  color: Scalars['String'];
  /** The time at which the project was moved into completed state. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The number of completed issues in the project after each week. */
  completedIssueCountHistory: Array<Scalars['Float']>;
  /** The number of completed estimation points after each week. */
  completedScopeHistory: Array<Scalars['Float']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the project. */
  creator: User;
  /** The project's description. */
  description: Scalars['String'];
  /** Documents associated with the project. */
  documents: DocumentConnection;
  /** The icon of the project. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The total number of issues in the project after each week. */
  issueCountHistory: Array<Scalars['Float']>;
  /** Issues associated with the project. */
  issues: IssueConnection;
  /** The project lead. */
  lead?: Maybe<User>;
  /** Links associated with the project. */
  links: ProjectLinkConnection;
  /** Users that are members of the project. */
  members: UserConnection;
  /** The milestone that this project is associated with. */
  milestone?: Maybe<Milestone>;
  /** The project's name. */
  name: Scalars['String'];
  /** The overall progress of the project. This is the (completed estimate points + 0.25 * in progress estimate points) / total estimate points. */
  progress: Scalars['Float'];
  /** The total number of estimation points after each week. */
  scopeHistory: Array<Scalars['Float']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean'];
  /** The project's unique URL slug. */
  slugId: Scalars['String'];
  /** The sort order for the project within its milestone. */
  sortOrder: Scalars['Float'];
  /** [Internal] The estimated start date of the project. */
  startDate?: Maybe<Scalars['TimelessDate']>;
  /** The time at which the project was moved into started state. */
  startedAt?: Maybe<Scalars['DateTime']>;
  /** The type of the state. */
  state: Scalars['String'];
  /** The estimated completion date of the project. */
  targetDate?: Maybe<Scalars['TimelessDate']>;
  /** Teams associated with this project. */
  teams: TeamConnection;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Project URL. */
  url: Scalars['String'];
};


/** A project. */
export type ProjectDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A project. */
export type ProjectTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** [Alpha] Project filtering options. */
export type ProjectCollectionFilter = {
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Filters that needs to be matched by all projects. */
  every?: InputMaybe<ProjectFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Filters that the projects milestones must satisfy. */
  milestone?: InputMaybe<NullableMilestoneFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectFilter>>;
  /** Filters that needs to be matched by some projects. */
  some?: InputMaybe<ProjectFilter>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
};

export type ProjectCreateInput = {
  /** The color of the project. */
  color?: InputMaybe<Scalars['String']>;
  /** The description for the project. */
  description?: InputMaybe<Scalars['String']>;
  /** The icon of the project. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The identifier of the project lead. */
  leadId?: InputMaybe<Scalars['String']>;
  /** The identifiers of the members of this project. */
  memberIds?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier of the milestone to associate the project with. */
  milestoneId?: InputMaybe<Scalars['String']>;
  /** The name of the project. */
  name: Scalars['String'];
  /** The sort order for the project within its milestone. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** [Internal] The planned start date of the project. */
  startDate?: InputMaybe<Scalars['TimelessDate']>;
  /** The state of the project. */
  state?: InputMaybe<Scalars['String']>;
  /** The planned target date of the project. */
  targetDate?: InputMaybe<Scalars['TimelessDate']>;
  /** The identifiers of the teams this project is associated with. */
  teamIds: Array<Scalars['String']>;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Project;
};

/** [Alpha] Project filtering options. */
export type ProjectFilter = {
  /** Compound filters, all of which need to be matched by the project. */
  and?: InputMaybe<Array<ProjectFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Filters that the projects creator must satisfy. */
  creator?: InputMaybe<UserFilter>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the projects issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Filters that the projects lead must satisfy. */
  lead?: InputMaybe<NullableUserFilter>;
  /** Filters that the projects members must satisfy. */
  members?: InputMaybe<UserFilter>;
  /** Filters that the projects milestones must satisfy. */
  milestone?: InputMaybe<NullableMilestoneFilter>;
  /** Comparator for the project name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the project. */
  or?: InputMaybe<Array<ProjectFilter>>;
  /** Comparator for the project start date. */
  startDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the project state. */
  state?: InputMaybe<StringComparator>;
  /** Comparator for the project target date. */
  targetDate?: InputMaybe<NullableDateComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** An external link for a project. */
export type ProjectLink = Node & {
  __typename?: 'ProjectLink';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the link. */
  creator: User;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The link's label. */
  label: Scalars['String'];
  /** The project that the link is associated with. */
  project: Project;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The link's URL. */
  url: Scalars['String'];
};

export type ProjectLinkConnection = {
  __typename?: 'ProjectLinkConnection';
  edges: Array<ProjectLinkEdge>;
  nodes: Array<ProjectLink>;
  pageInfo: PageInfo;
};

export type ProjectLinkCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The label for the link. */
  label: Scalars['String'];
  /** Related project for the link. */
  projectId: Scalars['String'];
  /** The URL of the link. */
  url: Scalars['String'];
};

export type ProjectLinkEdge = {
  __typename?: 'ProjectLinkEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: ProjectLink;
};

export type ProjectLinkPayload = {
  __typename?: 'ProjectLinkPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project that was created or updated. */
  projectLink: ProjectLink;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectLinkUpdateInput = {
  /** The label for the link. */
  label?: InputMaybe<Scalars['String']>;
  /** The URL of the link. */
  url?: InputMaybe<Scalars['String']>;
};

export type ProjectPayload = {
  __typename?: 'ProjectPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The project that was created or updated. */
  project?: Maybe<Project>;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type ProjectUpdateInput = {
  /** The date when the project was canceled. */
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  /** The color of the project. */
  color?: InputMaybe<Scalars['String']>;
  /** The date when the project was completed. */
  completedAt?: InputMaybe<Scalars['DateTime']>;
  /** The description for the project. */
  description?: InputMaybe<Scalars['String']>;
  /** The icon of the project. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier of the project lead. */
  leadId?: InputMaybe<Scalars['String']>;
  /** The identifiers of the members of this project. */
  memberIds?: InputMaybe<Array<Scalars['String']>>;
  /** The identifier of the milestone to associate the project with. */
  milestoneId?: InputMaybe<Scalars['String']>;
  /** The name of the project. */
  name?: InputMaybe<Scalars['String']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: InputMaybe<Scalars['Boolean']>;
  /** The sort order for the project within its milestone. */
  sortOrder?: InputMaybe<Scalars['Float']>;
  /** [Internal] The planned start date of the project. */
  startDate?: InputMaybe<Scalars['TimelessDate']>;
  /** The state of the project. */
  state?: InputMaybe<Scalars['String']>;
  /** The planned target date of the project. */
  targetDate?: InputMaybe<Scalars['TimelessDate']>;
  /** The identifiers of the teams this project is associated with. */
  teamIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Pull request data */
export type PullRequestPayload = {
  __typename?: 'PullRequestPayload';
  branch: Scalars['String'];
  closedAt: Scalars['String'];
  createdAt: Scalars['String'];
  draft: Scalars['Boolean'];
  id: Scalars['String'];
  mergedAt: Scalars['String'];
  number: Scalars['Float'];
  repoLogin: Scalars['String'];
  repoName: Scalars['String'];
  status: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
  url: Scalars['String'];
  userId: Scalars['String'];
  userLogin: Scalars['String'];
};

/** A user's web browser push notification subscription. */
export type PushSubscription = Node & {
  __typename?: 'PushSubscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type PushSubscriptionConnection = {
  __typename?: 'PushSubscriptionConnection';
  edges: Array<PushSubscriptionEdge>;
  nodes: Array<PushSubscription>;
  pageInfo: PageInfo;
};

export type PushSubscriptionCreateInput = {
  /** The data of the subscription in stringified JSON format. */
  data: Scalars['String'];
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The user identifier of the subscription. */
  userId: Scalars['String'];
};

export type PushSubscriptionEdge = {
  __typename?: 'PushSubscriptionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: PushSubscription;
};

export type PushSubscriptionPayload = {
  __typename?: 'PushSubscriptionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type PushSubscriptionTestPayload = {
  __typename?: 'PushSubscriptionTestPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  /** All teams you the user can administrate. Administrable teams are teams whose settings the user can change, but to whose issues the user doesn't necessarily have access to. */
  administrableTeams: TeamConnection;
  /** [Internal] All API keys for the user. */
  apiKeys: ApiKeyConnection;
  /** Get information for an application and whether a user has approved it for the given scopes. */
  applicationWithAuthorization: UserAuthorizedApplication;
  /** [Internal] Fetches an archived model. */
  archivedModelSync: ArchiveResponse;
  /** [Internal] Fetches archived models. */
  archivedModelsSync: ArchiveResponse;
  /**
   *
   * [Alpha] One specific issue attachment.
   * [Deprecated] 'url' can no longer be used as the 'id' parameter. Use 'attachmentsForUrl' instead
   */
  attachment: Attachment;
  /**
   *
   * [Alpha] Query an issue by its associated attachment, and its id.
   *
   * @deprecated Will be removed in near future, please use `attachmentsForURL` to get attachments and their issues instead.
   */
  attachmentIssue: Issue;
  /**
   * [Alpha] All issue attachments.
   *
   * To get attachments for a given URL, use `attachmentsForURL` query.
   */
  attachments: AttachmentConnection;
  /** [Alpha] Returns issue attachments for a given `url`. */
  attachmentsForURL: AttachmentConnection;
  /** All audit log entries. */
  auditEntries: AuditEntryConnection;
  /** List of audit entry types. */
  auditEntryTypes: Array<AuditEntryType>;
  /** Get all authorized applications for a user */
  authorizedApplications: Array<AuthorizedApplication>;
  /** Fetch users belonging to this user account. */
  availableUsers: AuthResolverResponse;
  /** Billing details for the customer. */
  billingDetails: BillingDetailsPayload;
  /** Join collaborative document and get missing steps. */
  collaborativeDocumentJoin: CollaborationDocumentUpdatePayload;
  /** A specific comment. */
  comment: Comment;
  /** All comments. */
  comments: CommentConnection;
  /** One specific custom view. */
  customView: CustomView;
  /** Custom views for the user. */
  customViews: CustomViewConnection;
  /** One specific cycle. */
  cycle: Cycle;
  /** All cycles. */
  cycles: CycleConnection;
  /** [Internal] Fetches the dependencies of a model. */
  dependentModelSync: DependencyResponse;
  /** One specific document. */
  document: Document;
  /** [Internal] Searches documentation. */
  documentationSearch: Array<DocumentationSearchPayload>;
  /** All documents for the project. */
  documents: DocumentConnection;
  /** A specific emoji. */
  emoji: Emoji;
  /** All custom emojis. */
  emojis: EmojiConnection;
  /** One specific favorite. */
  favorite: Favorite;
  /** The user's favorites. */
  favorites: FavoriteConnection;
  /** Fetch Figma screenshot and other information with file and node identifiers. */
  figmaEmbedInfo: FigmaEmbedPayload;
  /** One specific integration. */
  integration: Integration;
  /** One specific integration resource. (e.g. linked GitHub pull requests for an issue) */
  integrationResource: IntegrationResource;
  /** All integrations resources (e.g. linked GitHub pull requests for issues). */
  integrationResources: IntegrationResourceConnection;
  /** All integrations. */
  integrations: IntegrationConnection;
  /** One specific issue. */
  issue: Issue;
  /** [Internal] The history of issue descriptions. */
  issueDescriptionHistory: IssueDescriptionHistoryPayload;
  /** Fetches the GitHub token, completing the OAuth flow. */
  issueImportFinishGithubOAuth: GithubOAuthTokenPayload;
  /** One specific label. */
  issueLabel: IssueLabel;
  /** All issue labels. */
  issueLabels: IssueLabelConnection;
  /** Issue priority values and corresponding labels. */
  issuePriorityValues: Array<IssuePriorityValue>;
  /** One specific issue relation. */
  issueRelation: IssueRelation;
  /** All issue relationships. */
  issueRelations: IssueRelationConnection;
  /** [ALPHA] Search issues. This query is experimental and is subject to change without notice. */
  issueSearch: IssueConnection;
  /** All issues. */
  issues: IssueConnection;
  /** One specific milestone. */
  milestone: Milestone;
  /** All milestones. */
  milestones: MilestoneConnection;
  /** One specific notification. */
  notification: Notification;
  /** One specific notification subscription. */
  notificationSubscription: NotificationSubscription;
  /** The user's notification subscriptions. */
  notificationSubscriptions: NotificationSubscriptionConnection;
  /** All notifications. */
  notifications: NotificationConnection;
  /** The user's organization. */
  organization: Organization;
  /** Does the organization exist. */
  organizationExists: OrganizationExistsPayload;
  /** One specific organization invite. */
  organizationInvite: OrganizationInvite;
  /** One specific organization invite. */
  organizationInviteDetails: OrganizationInviteDetailsPayload;
  /** All invites for the organization. */
  organizationInvites: OrganizationInviteConnection;
  /** One specific project. */
  project: Project;
  /** One specific project link. */
  projectLink: ProjectLink;
  /** All links for the project. */
  projectLinks: ProjectLinkConnection;
  /** All projects. */
  projects: ProjectConnection;
  /** Sends a test push message. */
  pushSubscriptionTest: PushSubscriptionTestPayload;
  /** A specific reaction. */
  reaction: Reaction;
  /** All comment emoji reactions. */
  reactions: ReactionConnection;
  /** [Internal] Search in Linear. This query is for internal purposes only and is subject to change without notice. */
  search: SearchResultPayload;
  /** Fetch SSO login URL for the email provided. */
  ssoUrlFromEmail: SsoUrlFromEmailResponse;
  /** The organization's subscription. */
  subscription?: Maybe<Subscription>;
  /** [Internal] Syncs a batch of models. */
  syncBatch: SyncBatchResponse;
  /** [Internal] Fetch data to catch up the client to the state of the world. */
  syncBootstrap: SyncResponse;
  /** [Internal] Fetches delta sync packets. */
  syncDelta: SyncDeltaResponse;
  /** One specific team. */
  team: Team;
  /** One specific team membership. */
  teamMembership: TeamMembership;
  /** All team memberships. */
  teamMemberships: TeamMembershipConnection;
  /** All teams whose issues can be accessed by the user. This might be different from `administrableTeams`, which also includes teams whose settings can be changed by the user. */
  teams: TeamConnection;
  /** A specific template. */
  template: Template;
  /** All templates from all users. */
  templates: Array<Template>;
  /** One specific user. */
  user: User;
  /** The user's settings. */
  userSettings: UserSettings;
  /** All users for the organization. */
  users: UserConnection;
  /** The currently authenticated user. */
  viewer: User;
  /** A specific webhook. */
  webhook: Webhook;
  /** All webhooks. */
  webhooks: WebhookConnection;
  /** One specific state. */
  workflowState: WorkflowState;
  /** All issue workflow states. */
  workflowStates: WorkflowStateConnection;
};


export type QueryAdministrableTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryApiKeysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryApplicationWithAuthorizationArgs = {
  clientId: Scalars['String'];
  redirectUri?: InputMaybe<Scalars['String']>;
  scope: Array<Scalars['String']>;
};


export type QueryArchivedModelSyncArgs = {
  identifier: Scalars['String'];
  modelClass: Scalars['String'];
};


export type QueryArchivedModelsSyncArgs = {
  before?: InputMaybe<Scalars['DateTime']>;
  last?: InputMaybe<Scalars['Int']>;
  modelClass: Scalars['String'];
  teamId: Scalars['String'];
  trashOption?: InputMaybe<TrashOptionType>;
};


export type QueryAttachmentArgs = {
  id: Scalars['String'];
};


export type QueryAttachmentIssueArgs = {
  id: Scalars['String'];
};


export type QueryAttachmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AttachmentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryAttachmentsForUrlArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  url: Scalars['String'];
};


export type QueryAuditEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<AuditEntryFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCollaborativeDocumentJoinArgs = {
  clientId: Scalars['String'];
  issueId: Scalars['String'];
  version: Scalars['Int'];
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCustomViewArgs = {
  id: Scalars['String'];
};


export type QueryCustomViewsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryCycleArgs = {
  id: Scalars['String'];
};


export type QueryCyclesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CycleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryDependentModelSyncArgs = {
  identifier: Scalars['String'];
  modelClass: Scalars['String'];
};


export type QueryDocumentArgs = {
  id: Scalars['String'];
};


export type QueryDocumentationSearchArgs = {
  query: Scalars['String'];
  type: Scalars['String'];
};


export type QueryDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryEmojiArgs = {
  id: Scalars['String'];
};


export type QueryEmojisArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryFavoriteArgs = {
  id: Scalars['String'];
};


export type QueryFavoritesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryFigmaEmbedInfoArgs = {
  fileId: Scalars['String'];
  nodeId?: InputMaybe<Scalars['String']>;
};


export type QueryIntegrationArgs = {
  id: Scalars['String'];
};


export type QueryIntegrationResourceArgs = {
  id: Scalars['String'];
};


export type QueryIntegrationResourcesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueArgs = {
  id: Scalars['String'];
};


export type QueryIssueDescriptionHistoryArgs = {
  id: Scalars['String'];
};


export type QueryIssueImportFinishGithubOAuthArgs = {
  code: Scalars['String'];
};


export type QueryIssueLabelArgs = {
  id: Scalars['String'];
};


export type QueryIssueLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueRelationArgs = {
  id: Scalars['String'];
};


export type QueryIssueRelationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryIssueSearchArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  query: Scalars['String'];
};


export type QueryIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryMilestoneArgs = {
  id: Scalars['String'];
};


export type QueryMilestonesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<MilestoneFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryNotificationArgs = {
  id: Scalars['String'];
};


export type QueryNotificationSubscriptionArgs = {
  id: Scalars['String'];
};


export type QueryNotificationSubscriptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryNotificationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryOrganizationExistsArgs = {
  urlKey: Scalars['String'];
};


export type QueryOrganizationInviteArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationInviteDetailsArgs = {
  id: Scalars['String'];
};


export type QueryOrganizationInvitesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};


export type QueryProjectLinkArgs = {
  id: Scalars['String'];
};


export type QueryProjectLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryReactionArgs = {
  id: Scalars['String'];
};


export type QueryReactionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QuerySearchArgs = {
  from?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};


export type QuerySsoUrlFromEmailArgs = {
  email: Scalars['String'];
  isDesktop?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySyncBatchArgs = {
  requests: Array<BatchRequest>;
};


export type QuerySyncBootstrapArgs = {
  newVersion?: InputMaybe<Scalars['Boolean']>;
  onlyModels?: InputMaybe<Array<Scalars['String']>>;
  syncGroups?: InputMaybe<Array<Scalars['String']>>;
};


export type QuerySyncDeltaArgs = {
  lastSyncId: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
  toSyncId: Scalars['Int'];
};


export type QueryTeamArgs = {
  id: Scalars['String'];
};


export type QueryTeamMembershipArgs = {
  id: Scalars['String'];
};


export type QueryTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryTemplateArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryWebhookArgs = {
  id: Scalars['String'];
};


export type QueryWebhooksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


export type QueryWorkflowStateArgs = {
  id: Scalars['String'];
};


export type QueryWorkflowStatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WorkflowStateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A reaction associated with a comment. */
export type Reaction = Node & {
  __typename?: 'Reaction';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The comment that the reaction is associated with. */
  comment: Comment;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Name of the reaction's emoji. */
  emoji: Scalars['String'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user who reacted. */
  user: User;
};

export type ReactionConnection = {
  __typename?: 'ReactionConnection';
  edges: Array<ReactionEdge>;
  nodes: Array<Reaction>;
  pageInfo: PageInfo;
};

export type ReactionCreateInput = {
  /** The comment to associate the reaction with. */
  commentId: Scalars['String'];
  /** The emoji the user reacted with. */
  emoji?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one */
  id?: InputMaybe<Scalars['String']>;
};

export type ReactionEdge = {
  __typename?: 'ReactionEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Reaction;
};

export type ReactionPayload = {
  __typename?: 'ReactionPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  reaction: Reaction;
  success: Scalars['Boolean'];
};

export type RotateSecretPayload = {
  __typename?: 'RotateSecretPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** The integration resource's settings */
export type SamlConfiguration = {
  __typename?: 'SamlConfiguration';
  /** List of allowed email domains for SAML authentication. */
  allowedDomains?: Maybe<Array<Scalars['String']>>;
  /** The issuer's custom entity ID. */
  issuerEntityId?: Maybe<Scalars['String']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: Maybe<Scalars['String']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: Maybe<Scalars['String']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: Maybe<Scalars['String']>;
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: Maybe<Scalars['String']>;
};

export type SamlConfigurationInput = {
  /** List of allowed email domains for SAML authentication. */
  allowedDomains?: InputMaybe<Array<Scalars['String']>>;
  /** The issuer's custom entity ID. */
  issuerEntityId?: InputMaybe<Scalars['String']>;
  /** Binding method for authentication call. Can be either `post` (default) or `redirect`. */
  ssoBinding?: InputMaybe<Scalars['String']>;
  /** Sign in endpoint URL for the identity provider. */
  ssoEndpoint?: InputMaybe<Scalars['String']>;
  /** The algorithm of the Signing Certificate. Can be one of `sha1`, `sha256` (default), or `sha512`. */
  ssoSignAlgo?: InputMaybe<Scalars['String']>;
  /** X.509 Signing Certificate in string form. */
  ssoSigningCert?: InputMaybe<Scalars['String']>;
};

export type SearchResultPayload = {
  __typename?: 'SearchResultPayload';
  /** Archived issues matching the search term along with all their dependencies. */
  archivePayload: ArchiveResponse;
  /** Active issue IDs returned matching the search term. */
  issueIds: Array<Scalars['String']>;
  /** Total number of search results. */
  totalCount: Scalars['Int'];
};

/** Sentry issue data */
export type SentryIssuePayload = {
  __typename?: 'SentryIssuePayload';
  /** The Sentry identifier of the actor who created the issue. */
  actorId: Scalars['Float'];
  /** The name of the Sentry actor who created this issue. */
  actorName: Scalars['String'];
  /** The type of the actor who created the issue. */
  actorType: Scalars['String'];
  /** The date this issue was first seen. */
  firstSeen: Scalars['String'];
  /** The name of the first release version this issue appeared on, if available. */
  firstVersion?: Maybe<Scalars['String']>;
  /** The Sentry identifier for the issue. */
  issueId: Scalars['String'];
  /** The title of the issue. */
  issueTitle: Scalars['String'];
  /** The Sentry identifier of the project this issue belongs to. */
  projectId: Scalars['Float'];
  /** The slug of the project this issue belongs to. */
  projectSlug: Scalars['String'];
  /** The shortId of the issue. */
  shortId: Scalars['String'];
  /** The description of the issue. */
  webUrl: Scalars['String'];
};

/** Sentry specific settings. */
export type SentrySettings = {
  __typename?: 'SentrySettings';
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String'];
};

export type SentrySettingsInput = {
  /** The slug of the Sentry organization being connected. */
  organizationSlug: Scalars['String'];
};

/** Slack notification specific settings. */
export type SlackPostSettings = {
  __typename?: 'SlackPostSettings';
  channel: Scalars['String'];
  channelId: Scalars['String'];
  configurationUrl: Scalars['String'];
};

export type SlackPostSettingsInput = {
  channel: Scalars['String'];
  channelId: Scalars['String'];
  configurationUrl: Scalars['String'];
};

export type SsoUrlFromEmailResponse = {
  __typename?: 'SsoUrlFromEmailResponse';
  /** SAML SSO sign-in URL. */
  samlSsoUrl: Scalars['String'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type StepsResponse = {
  __typename?: 'StepsResponse';
  /** List of client IDs for the document steps. */
  clientIds: Array<Scalars['String']>;
  /** New document steps from the client. */
  steps?: Maybe<Array<Scalars['JSON']>>;
  /** Client's document version. */
  version: Scalars['Int'];
};

/** Comparator for strings. */
export type StringComparator = {
  /** Contains constraint. Matches any values that contain the given string. */
  contains?: InputMaybe<Scalars['String']>;
  /** Contains case insensitive constraint. Matches any values that contain the given string case insensitive. */
  containsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Ends with constraint. Matches any values that end with the given string. */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['String']>;
  /** Equals case insensitive. Matches any values that matches the given string case insensitive. */
  eqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['String']>;
  /** Not-equals case insensitive. Matches any values that don't match the given string case insensitive. */
  neqIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['String']>>;
  /** Doesn't contain constraint. Matches any values that don't contain the given string. */
  notContains?: InputMaybe<Scalars['String']>;
  /** Doesn't contain case insensitive constraint. Matches any values that don't contain the given string case insensitive. */
  notContainsIgnoreCase?: InputMaybe<Scalars['String']>;
  /** Doesn't end with constraint. Matches any values that don't end with the given string. */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Doesn't start with constraint. Matches any values that don't start with the given string. */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Starts with constraint. Matches any values that start with the given string. */
  startsWith?: InputMaybe<Scalars['String']>;
};

/** The subscription of an organization. */
export type Subscription = Node & {
  __typename?: 'Subscription';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The date the subscription was canceled, if any. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The creator of the subscription. */
  creator?: Maybe<User>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The date the subscription will be billed next. */
  nextBillingAt?: Maybe<Scalars['DateTime']>;
  /** The organization that the subscription is associated with. */
  organization: Organization;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: Maybe<Scalars['String']>;
  /** The number of seats in the subscription. */
  seats: Scalars['Float'];
  /** The subscription type. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type SubscriptionPayload = {
  __typename?: 'SubscriptionPayload';
  /** The date the subscription was set to cancel at the end of the billing period, if any. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** The subscription entity being mutated. */
  subscription: Subscription;
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type SubscriptionSessionPayload = {
  __typename?: 'SubscriptionSessionPayload';
  /** The subscription session that was created or updated. */
  session?: Maybe<Scalars['String']>;
};

export type SubscriptionUpdateInput = {
  /** The date the subscription was set to cancel, if any. */
  canceledAt?: InputMaybe<Scalars['DateTime']>;
  /** The subscription type of a pending change. Null if no change pending. */
  pendingChangeType?: InputMaybe<Scalars['String']>;
};

/** Contains the requested relations. */
export type SyncBatchResponse = {
  __typename?: 'SyncBatchResponse';
  /** A JSON serialized collection of relations model object. */
  models: Scalars['String'];
};

/** Contains a delta sync. */
export type SyncDeltaResponse = {
  __typename?: 'SyncDeltaResponse';
  /** Whether the client should try loading more. */
  loadMore: Scalars['Boolean'];
  /** Whether loading the delta was successful. In case it wasn't, the client is instructed to do a full bootstrap. */
  success: Scalars['Boolean'];
  /** A JSON serialized collection of delta packets. */
  updates?: Maybe<Scalars['String']>;
};

/**
 * Contains either the full serialized state of the application or delta packets that the requester can
 *   apply to the local data set in order to be up-to-date.
 */
export type SyncResponse = {
  __typename?: 'SyncResponse';
  /** The version of the remote database. Incremented by 1 for each migration run on the database. */
  databaseVersion: Scalars['Float'];
  /**
   * JSON serialized delta changes that the client can apply to its local state
   *     in order to catch up with the state of the world.
   */
  delta?: Maybe<Scalars['String']>;
  /** The last sync id covered by the response. */
  lastSyncId: Scalars['Float'];
  /**
   * The full state of the organization as a serialized JSON object.
   *     Mutually exclusive with the delta property
   */
  state?: Maybe<Scalars['String']>;
  /** The sync groups that the user is subscribed to. */
  subscribedSyncGroups: Array<Scalars['String']>;
};

export type SynchronizedPayload = {
  __typename?: 'SynchronizedPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
};

/** An organizational unit that contains issues. */
export type Team = Node & {
  __typename?: 'Team';
  /** Team's currently active cycle. */
  activeCycle?: Maybe<Cycle>;
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Period after which automatically closed and completed issues are automatically archived in months. */
  autoArchivePeriod: Scalars['Float'];
  /** Period after which issues are automatically closed in months. Null/undefined means disabled. */
  autoClosePeriod?: Maybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. Defaults to the first canceled state. */
  autoCloseStateId?: Maybe<Scalars['String']>;
  /** The team's color. */
  color?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Calendar feed URL (iCal) for cycles. */
  cycleCalenderUrl: Scalars['String'];
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime: Scalars['Float'];
  /** The duration of a cycle in weeks. */
  cycleDuration: Scalars['Float'];
  /** Auto assign completed issues to current cycle. */
  cycleIssueAutoAssignCompleted: Scalars['Boolean'];
  /** Auto assign started issues to current cycle. */
  cycleIssueAutoAssignStarted: Scalars['Boolean'];
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive: Scalars['Boolean'];
  /** The day of the week that a new cycle starts. */
  cycleStartDay: Scalars['Float'];
  /** Cycles associated with the team. */
  cycles: CycleConnection;
  /** Whether the team uses cycles. */
  cyclesEnabled: Scalars['Boolean'];
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate: Scalars['Float'];
  /** The default workflow state into which issues are set when they are opened by team members. */
  defaultIssueState?: Maybe<WorkflowState>;
  /** The default template to use for new issues created by members of the team. */
  defaultTemplateForMembers?: Maybe<Template>;
  /**
   * The id of the default template to use for new issues created by members of the team.
   * @deprecated Use defaultTemplateForMembers instead
   */
  defaultTemplateForMembersId?: Maybe<Scalars['String']>;
  /** The default template to use for new issues created by non-members of the team. */
  defaultTemplateForNonMembers?: Maybe<Template>;
  /**
   * The id of the default template to use for new issues created by non-members of the team.
   * @deprecated Use defaultTemplateForNonMembers instead
   */
  defaultTemplateForNonMembersId?: Maybe<Scalars['String']>;
  /** The team's description. */
  description?: Maybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a PR has been opened as draft. */
  draftWorkflowState?: Maybe<WorkflowState>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory: Scalars['Boolean'];
  /** The icon of the team. */
  icon?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Unique hash for the team to be used in invite URLs. */
  inviteHash: Scalars['String'];
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero: Scalars['Boolean'];
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended: Scalars['Boolean'];
  /** The issue estimation type to use. */
  issueEstimationType: Scalars['String'];
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst: Scalars['Boolean'];
  /** Issues associated with the team. */
  issues: IssueConnection;
  /** The team's unique key. The key is used in URLs. */
  key: Scalars['String'];
  /** Labels associated with the team. */
  labels: IssueLabelConnection;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. Defaults to the first canceled state. */
  markedAsDuplicateWorkflowState?: Maybe<WorkflowState>;
  /** Users who are members of this team. */
  members: UserConnection;
  /** Memberships associated with the team. For easier access of the same data, use `members` query. */
  memberships: TeamMembershipConnection;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowState?: Maybe<WorkflowState>;
  /** The team's name. */
  name: Scalars['String'];
  /** The organization that the team is associated with. */
  organization: Organization;
  /** Whether the team is private or not. */
  private: Scalars['Boolean'];
  /** Projects associated with the team. */
  projects: ProjectConnection;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowState?: Maybe<WorkflowState>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments: Scalars['Boolean'];
  /** Whether to send new issue status updates to Slack. */
  slackIssueStatuses: Scalars['Boolean'];
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue: Scalars['Boolean'];
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowState?: Maybe<WorkflowState>;
  /** The states that define the workflow associated with the team. */
  states: WorkflowStateConnection;
  /** Templates associated with the team. */
  templates: TemplateConnection;
  /** The timezone of the team. Defaults to "America/Los_Angeles" */
  timezone: Scalars['String'];
  /** Whether triage mode is enabled for the team or not. */
  triageEnabled: Scalars['Boolean'];
  /** The workflow state into which issues are set when they are opened by non-team members or integrations if triage is enabled. */
  triageIssueState?: Maybe<WorkflowState>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount: Scalars['Float'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Webhooks associated with the team. */
  webhooks: WebhookConnection;
};


/** An organizational unit that contains issues. */
export type TeamCyclesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<CycleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamLabelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueLabelFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  includeDisabled?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamProjectsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamStatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<WorkflowStateFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamTemplatesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** An organizational unit that contains issues. */
export type TeamWebhooksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  edges: Array<TeamEdge>;
  nodes: Array<Team>;
  pageInfo: PageInfo;
};

export type TeamCreateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. 0 means disabled. */
  autoArchivePeriod?: InputMaybe<Scalars['Float']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: InputMaybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: InputMaybe<Scalars['String']>;
  /** The color of the team. */
  color?: InputMaybe<Scalars['String']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: InputMaybe<Scalars['Int']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: InputMaybe<Scalars['Int']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: InputMaybe<Scalars['Boolean']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: InputMaybe<Scalars['Boolean']>;
  /** Only allow issues issues with cycles in Active Issues. */
  cycleLockToActive?: InputMaybe<Scalars['Boolean']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: InputMaybe<Scalars['Float']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: InputMaybe<Scalars['Float']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: InputMaybe<Scalars['String']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: InputMaybe<Scalars['String']>;
  /** The description of the team. */
  description?: InputMaybe<Scalars['String']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: InputMaybe<Scalars['Boolean']>;
  /** The icon of the team. */
  icon?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: InputMaybe<Scalars['Boolean']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: InputMaybe<Scalars['Boolean']>;
  /** The issue estimation type to use. */
  issueEstimationType?: InputMaybe<Scalars['String']>;
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst?: InputMaybe<Scalars['Boolean']>;
  /** The key of the team. If not given, the key will be generated based on the name of the team. */
  key?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The name of the team. */
  name: Scalars['String'];
  /** The organization associated with the team. */
  organizationId?: InputMaybe<Scalars['String']>;
  /** Internal. Whether the team is private or not. */
  private?: InputMaybe<Scalars['Boolean']>;
  /** The timezone of the team. */
  timezone?: InputMaybe<Scalars['String']>;
  /** Whether triage mode is enabled for the team. */
  triageEnabled?: InputMaybe<Scalars['Boolean']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: InputMaybe<Scalars['Float']>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Team;
};

/** [Alpha] Project filtering options. */
export type TeamFilter = {
  /** Compound filters, all of which need to be matched by the team. */
  and?: InputMaybe<Array<TeamFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the team description. */
  description?: InputMaybe<NullableStringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the teams issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the team key. */
  key?: InputMaybe<StringComparator>;
  /** Comparator for the team name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the team. */
  or?: InputMaybe<Array<TeamFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** Defines the membership of a user to a team. */
export type TeamMembership = Node & {
  __typename?: 'TeamMembership';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Whether the user is the owner of the team */
  owner?: Maybe<Scalars['Boolean']>;
  /** The team that the membership is associated with. */
  team: Team;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user that the membership is associated with. */
  user: User;
};

export type TeamMembershipConnection = {
  __typename?: 'TeamMembershipConnection';
  edges: Array<TeamMembershipEdge>;
  nodes: Array<TeamMembership>;
  pageInfo: PageInfo;
};

export type TeamMembershipCreateInput = {
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** Internal. Whether the user is the owner of the team. */
  owner?: InputMaybe<Scalars['Boolean']>;
  /** The identifier of the team associated with the membership. */
  teamId: Scalars['String'];
  /** The identifier of the user associated with the membership. */
  userId: Scalars['String'];
};

export type TeamMembershipEdge = {
  __typename?: 'TeamMembershipEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: TeamMembership;
};

export type TeamMembershipPayload = {
  __typename?: 'TeamMembershipPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The team membership that was created or updated. */
  teamMembership?: Maybe<TeamMembership>;
};

export type TeamMembershipUpdateInput = {
  /** Internal. Whether the user is the owner of the team. */
  owner: Scalars['Boolean'];
};

export type TeamPayload = {
  __typename?: 'TeamPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The team that was created or updated. */
  team?: Maybe<Team>;
};

export type TeamUpdateInput = {
  /** Period after which closed and completed issues are automatically archived, in months. */
  autoArchivePeriod?: InputMaybe<Scalars['Float']>;
  /** Period after which issues are automatically closed, in months. */
  autoClosePeriod?: InputMaybe<Scalars['Float']>;
  /** The canceled workflow state which auto closed issues will be set to. */
  autoCloseStateId?: InputMaybe<Scalars['String']>;
  /** The color of the team. */
  color?: InputMaybe<Scalars['String']>;
  /** The cooldown time after each cycle in weeks. */
  cycleCooldownTime?: InputMaybe<Scalars['Int']>;
  /** The duration of each cycle in weeks. */
  cycleDuration?: InputMaybe<Scalars['Int']>;
  /** Whether the first cycle should start in the current or the next week. */
  cycleEnabledStartWeek?: InputMaybe<Scalars['String']>;
  /** Auto assign completed issues to current active cycle setting. */
  cycleIssueAutoAssignCompleted?: InputMaybe<Scalars['Boolean']>;
  /** Auto assign started issues to current active cycle setting. */
  cycleIssueAutoAssignStarted?: InputMaybe<Scalars['Boolean']>;
  /** Only allow issues with cycles in Active Issues. */
  cycleLockToActive?: InputMaybe<Scalars['Boolean']>;
  /** The day of the week that a new cycle starts. */
  cycleStartDay?: InputMaybe<Scalars['Float']>;
  /** Whether the team uses cycles. */
  cyclesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** What to use as an default estimate for unestimated issues. */
  defaultIssueEstimate?: InputMaybe<Scalars['Float']>;
  /** Default status for newly created issues. */
  defaultIssueStateId?: InputMaybe<Scalars['String']>;
  /** The identifier of the default template for members of this team. */
  defaultTemplateForMembersId?: InputMaybe<Scalars['String']>;
  /** The identifier of the default template for non-members of this team. */
  defaultTemplateForNonMembersId?: InputMaybe<Scalars['String']>;
  /** The description of the team. */
  description?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a draft PR has been opened. */
  draftWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** Whether to group recent issue history entries. */
  groupIssueHistory?: InputMaybe<Scalars['Boolean']>;
  /** The icon of the team. */
  icon?: InputMaybe<Scalars['String']>;
  /** Whether to allow zeros in issues estimates. */
  issueEstimationAllowZero?: InputMaybe<Scalars['Boolean']>;
  /** Whether to add additional points to the estimate scale. */
  issueEstimationExtended?: InputMaybe<Scalars['Boolean']>;
  /** The issue estimation type to use. */
  issueEstimationType?: InputMaybe<Scalars['String']>;
  /** Whether issues without priority should be sorted first. */
  issueOrderingNoPriorityFirst?: InputMaybe<Scalars['Boolean']>;
  /** The key of the team. */
  key?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when they are marked as a duplicate of another issue. */
  markedAsDuplicateWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The workflow state into which issues are moved when a PR has been merged. */
  mergeWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The name of the team. */
  name?: InputMaybe<Scalars['String']>;
  /** Whether the team is private or not. */
  private?: InputMaybe<Scalars['Boolean']>;
  /** The workflow state into which issues are moved when a review has been requested for the PR. */
  reviewWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** Whether to send new issue comment notifications to Slack. */
  slackIssueComments?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send issue status update notifications to Slack. */
  slackIssueStatuses?: InputMaybe<Scalars['Boolean']>;
  /** Whether to send new issue notifications to Slack. */
  slackNewIssue?: InputMaybe<Scalars['Boolean']>;
  /** The workflow state into which issues are moved when a PR has been opened. */
  startWorkflowStateId?: InputMaybe<Scalars['String']>;
  /** The timezone of the team. */
  timezone?: InputMaybe<Scalars['String']>;
  /** Whether triage mode is enabled for the team. */
  triageEnabled?: InputMaybe<Scalars['Boolean']>;
  /** How many upcoming cycles to create. */
  upcomingCycleCount?: InputMaybe<Scalars['Float']>;
};

/** A template object used for creating entities faster. */
export type Template = Node & {
  __typename?: 'Template';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the template. */
  creator?: Maybe<User>;
  /** Template description. */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The name of the template. */
  name: Scalars['String'];
  /** The organization that the template is associated with. If null, the template is associated with a particular team. */
  organization?: Maybe<Organization>;
  /** The team that the template is associated with. If null, the template is global to the workspace. */
  team?: Maybe<Team>;
  /** Template data. */
  templateData: Scalars['JSON'];
  /** The entity type this template is for. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};

export type TemplateConnection = {
  __typename?: 'TemplateConnection';
  edges: Array<TemplateEdge>;
  nodes: Array<Template>;
  pageInfo: PageInfo;
};

export type TemplateCreateInput = {
  /** The template description. */
  description?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The template name. */
  name: Scalars['String'];
  /** The identifier or key of the team associated with the template. If not given, the template will be shared across all teams. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData: Scalars['JSON'];
  /** The template type, e.g. 'issue'. */
  type: Scalars['String'];
};

export type TemplateEdge = {
  __typename?: 'TemplateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Template;
};

export type TemplatePayload = {
  __typename?: 'TemplatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The template that was created or updated. */
  template: Template;
};

export type TemplateUpdateInput = {
  /** The template description. */
  description?: InputMaybe<Scalars['String']>;
  /** The template name. */
  name?: InputMaybe<Scalars['String']>;
  /** The identifier or key of the team associated with the template. If set to null, the template will be shared across all teams. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The template data as JSON encoded attributes of the type of entity, such as an issue. */
  templateData?: InputMaybe<Scalars['JSON']>;
};

/** Comparator for timeless dates. */
export type TimelessDateComparator = {
  /** Equals constraint. */
  eq?: InputMaybe<Scalars['TimelessDate']>;
  /** Greater-than constraint. Matches any values that are greater than the given value. */
  gt?: InputMaybe<Scalars['TimelessDate']>;
  /** Greater-than-or-equal constraint. Matches any values that are greater than or equal to the given value. */
  gte?: InputMaybe<Scalars['TimelessDate']>;
  /** In-array constraint. */
  in?: InputMaybe<Array<Scalars['TimelessDate']>>;
  /** Less-than constraint. Matches any values that are less than the given value. */
  lt?: InputMaybe<Scalars['TimelessDate']>;
  /** Less-than-or-equal constraint. Matches any values that are less than or equal to the given value. */
  lte?: InputMaybe<Scalars['TimelessDate']>;
  /** Not-equals constraint. */
  neq?: InputMaybe<Scalars['TimelessDate']>;
  /** Not-in-array constraint. */
  nin?: InputMaybe<Array<Scalars['TimelessDate']>>;
};

export type TokenUserAccountAuthInput = {
  /** The email which to login via the magic login code. */
  email: Scalars['String'];
  /** The identifiers of the teams to auto-join. */
  teamIdsToJoin?: InputMaybe<Array<Scalars['String']>>;
  /** The timezone of the user's browser. */
  timezone: Scalars['String'];
  /** The magic login code. */
  token: Scalars['String'];
};

/** How trashed models should be loaded. */
export enum TrashOptionType {
  ExcludeTrash = 'excludeTrash',
  IncludeTrash = 'includeTrash',
  TrashOnly = 'trashOnly'
}

export type UpdateOrganizationInput = {
  /** List of services that are allowed to be used for login. */
  allowedAuthServices?: InputMaybe<Array<Scalars['String']>>;
  /** How git branches are formatted. If null, default formatting will be used. */
  gitBranchFormat?: InputMaybe<Scalars['String']>;
  /** Whether the Git integration linkback messages should be sent for private repositories. */
  gitLinkbackMessagesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Whether the Git integration linkback messages should be sent for public repositories. */
  gitPublicLinkbackMessagesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Linear Preview feature flags */
  linearPreviewFlags?: InputMaybe<Scalars['JSONObject']>;
  /** The logo of the organization. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** The name of the organization. */
  name?: InputMaybe<Scalars['String']>;
  /** Whether the organization is using project milestones. */
  reducedPersonalInformation?: InputMaybe<Scalars['Boolean']>;
  /** Whether the organization is using project milestones. */
  roadmapEnabled?: InputMaybe<Scalars['Boolean']>;
  /** The URL key of the organization. */
  urlKey?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  /** Whether the user account is active. */
  active?: InputMaybe<Scalars['Boolean']>;
  /** Whether the user account has admin privileges. */
  admin?: InputMaybe<Scalars['Boolean']>;
  /** The avatar image URL of the user. */
  avatarUrl?: InputMaybe<Scalars['String']>;
  /** The user description or a short bio. */
  description?: InputMaybe<Scalars['String']>;
  /** Reason for deactivation. */
  disableReason?: InputMaybe<Scalars['String']>;
  /** The display name of the user. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The name of the user. */
  name?: InputMaybe<Scalars['String']>;
  /** The emoji part of the user status. */
  statusEmoji?: InputMaybe<Scalars['String']>;
  /** The label part of the user status. */
  statusLabel?: InputMaybe<Scalars['String']>;
  /** When the user status should be cleared. */
  statusUntilAt?: InputMaybe<Scalars['DateTime']>;
  /** The local timezone of the user. */
  timezone?: InputMaybe<Scalars['String']>;
};

/** Object representing Google Cloud upload policy, plus additional data. */
export type UploadFile = {
  __typename?: 'UploadFile';
  /** The asset URL for the uploaded file. (assigned automatically) */
  assetUrl: Scalars['String'];
  /** The content type. */
  contentType: Scalars['String'];
  /** The filename. */
  filename: Scalars['String'];
  headers: Array<UploadFileHeader>;
  metaData?: Maybe<Scalars['JSON']>;
  /** The size of the uploaded file. */
  size: Scalars['Int'];
  /** The signed URL the for the uploaded file. (assigned automatically) */
  uploadUrl: Scalars['String'];
};

export type UploadFileHeader = {
  __typename?: 'UploadFileHeader';
  /** Upload file header key. */
  key: Scalars['String'];
  /** Upload file header value. */
  value: Scalars['String'];
};

export type UploadPayload = {
  __typename?: 'UploadPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** Object describing the file to be uploaded. */
  uploadFile?: Maybe<UploadFile>;
};

/** A user that has access to the the resources of an organization. */
export type User = Node & {
  __typename?: 'User';
  /** Whether the user account is active or disabled (suspended). */
  active: Scalars['Boolean'];
  /** Whether the user is an organization administrator. */
  admin: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** Issues assigned to the user. */
  assignedIssues: IssueConnection;
  /** An URL to the user's avatar image. */
  avatarUrl?: Maybe<Scalars['String']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Number of issues created. */
  createdIssueCount: Scalars['Int'];
  /** Issues created by the user. */
  createdIssues: IssueConnection;
  /** A short description of the user, either its title or bio. */
  description?: Maybe<Scalars['String']>;
  /** Reason why is the account disabled. */
  disableReason?: Maybe<Scalars['String']>;
  /** The user's display (nick) name. Unique within each organization. */
  displayName: Scalars['String'];
  /** The user's email address. */
  email: Scalars['String'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Unique hash for the user to be used in invite URLs. */
  inviteHash: Scalars['String'];
  /** The last time the user was seen online. If null, the user is currently online. */
  lastSeen?: Maybe<Scalars['DateTime']>;
  /** The user's full name. */
  name: Scalars['String'];
  /** Organization the user belongs to. */
  organization: Organization;
  /** The emoji to represent the user current status. */
  statusEmoji?: Maybe<Scalars['String']>;
  /** The label of the user current status. */
  statusLabel?: Maybe<Scalars['String']>;
  /** A date at which the user current status should be cleared. */
  statusUntilAt?: Maybe<Scalars['DateTime']>;
  /** Memberships associated with the user. For easier access of the same data, use `teams` query. */
  teamMemberships: TeamMembershipConnection;
  /** Teams the user is part of. */
  teams: TeamConnection;
  /** The local timezone of the user. */
  timezone?: Maybe<Scalars['String']>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** User's profile URL. */
  url: Scalars['String'];
};


/** A user that has access to the the resources of an organization. */
export type UserAssignedIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserCreatedIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};


/** A user that has access to the the resources of an organization. */
export type UserTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<TeamFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

/** A user account. */
export type UserAccount = {
  __typename?: 'UserAccount';
  /** The time at which the model was archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the model was created. */
  createdAt: Scalars['DateTime'];
  /** The user's email address. */
  email: Scalars['String'];
  /** The models identifier. */
  id: Scalars['ID'];
  /** The user's name. */
  name?: Maybe<Scalars['String']>;
  /** The authentication service used to create the account. */
  service: Scalars['String'];
  /** The time at which the model was updated. */
  updatedAt: Scalars['DateTime'];
  /** Users belonging to the account. */
  users: Array<User>;
};

export type UserAdminPayload = {
  __typename?: 'UserAdminPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** Public information of the OAuth application, plus whether the application has been authorized for the given scopes. */
export type UserAuthorizedApplication = {
  __typename?: 'UserAuthorizedApplication';
  /** OAuth application's client ID. */
  clientId: Scalars['String'];
  /** Whether the application was created by Linear. */
  createdByLinear: Scalars['Boolean'];
  /** Information about the application. */
  description?: Maybe<Scalars['String']>;
  /** Name of the developer. */
  developer: Scalars['String'];
  /** Url of the developer (homepage or docs). */
  developerUrl: Scalars['String'];
  /** Image of the application. */
  imageUrl?: Maybe<Scalars['String']>;
  /** Whether the user has authorized the application for the given scopes. */
  isAuthorized: Scalars['Boolean'];
  /** Application name. */
  name: Scalars['String'];
  /** Whether or not webhooks are enabled for the application. */
  webhooksEnabled: Scalars['Boolean'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: User;
};

/** [Alpha] User filtering options. */
export type UserFilter = {
  /** Compound filters, all of which need to be matched by the user. */
  and?: InputMaybe<Array<UserFilter>>;
  /** Filters that the users assigned issues must satisfy. */
  assignedIssues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the users display name. */
  displayName?: InputMaybe<StringComparator>;
  /** Comparator for the users email. */
  email?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Comparator for the users name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the user. */
  or?: InputMaybe<Array<UserFilter>>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

/** The types of flags that the user can have. */
export enum UserFlagType {
  AnalyticsWelcomeDismissed = 'analyticsWelcomeDismissed',
  CanPlaySnake = 'canPlaySnake',
  CanPlayTetris = 'canPlayTetris',
  CompletedOnboarding = 'completedOnboarding',
  CycleWelcomeDismissed = 'cycleWelcomeDismissed',
  DesktopDownloadToastDismissed = 'desktopDownloadToastDismissed',
  DesktopInstalled = 'desktopInstalled',
  DueDateShortcutMigration = 'dueDateShortcutMigration',
  EmptyActiveIssuesDismissed = 'emptyActiveIssuesDismissed',
  EmptyBacklogDismissed = 'emptyBacklogDismissed',
  EmptyCustomViewsDismissed = 'emptyCustomViewsDismissed',
  EmptyMyIssuesDismissed = 'emptyMyIssuesDismissed',
  FigmaPromptDismissed = 'figmaPromptDismissed',
  ImportBannerDismissed = 'importBannerDismissed',
  IssueMovePromptCompleted = 'issueMovePromptCompleted',
  ListSelectionTip = 'listSelectionTip',
  MigrateThemePreference = 'migrateThemePreference',
  ProjectWelcomeDismissed = 'projectWelcomeDismissed',
  SlackCommentReactionTipShown = 'slackCommentReactionTipShown',
  TriageWelcomeDismissed = 'triageWelcomeDismissed'
}

/** Operations that can be applied to UserFlagType */
export enum UserFlagUpdateOperation {
  Clear = 'clear',
  Decr = 'decr',
  Incr = 'incr',
  Lock = 'lock'
}

export type UserPayload = {
  __typename?: 'UserPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The user that was created or updated. */
  user?: Maybe<User>;
};

/** The settings of a user as a JSON object. */
export type UserSettings = Node & {
  __typename?: 'UserSettings';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The notification channel settings the user has selected. */
  notificationPreferences: Scalars['JSONObject'];
  /** The email types the user has unsubscribed from. */
  unsubscribedFrom: Array<Scalars['String']>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The user associated with these settings. */
  user: User;
};

export type UserSettingsFlagPayload = {
  __typename?: 'UserSettingsFlagPayload';
  /** The flag key which was updated. */
  flag: Scalars['String'];
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The flag value after update. */
  value: Scalars['Int'];
};

export type UserSettingsFlagsResetPayload = {
  __typename?: 'UserSettingsFlagsResetPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

export type UserSettingsPayload = {
  __typename?: 'UserSettingsPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The user's settings. */
  userSettings: UserSettings;
};

export type UserSettingsUpdateInput = {
  /** The user's notification preferences. */
  notificationPreferences?: InputMaybe<Scalars['JSONObject']>;
  /** The user's settings. */
  settings?: InputMaybe<Scalars['String']>;
  /** The types of emails the user has unsubscribed from. */
  unsubscribedFrom?: InputMaybe<Array<Scalars['String']>>;
};

export type UserSubscribeToNewsletterPayload = {
  __typename?: 'UserSubscribeToNewsletterPayload';
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
};

/** View preferences. */
export type ViewPreferences = Node & {
  __typename?: 'ViewPreferences';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** The view preference type. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** The view type. */
  viewType: Scalars['String'];
};

export type ViewPreferencesCreateInput = {
  /** The custom view these view preferences are associated with. */
  customViewId?: InputMaybe<Scalars['String']>;
  /** The cycle these view preferences are associated with. */
  cycleId?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The label these view preferences are associated with. */
  labelId?: InputMaybe<Scalars['String']>;
  /** View preferences object. */
  preferences: Scalars['JSONObject'];
  /** The project these view preferences are associated with. */
  projectId?: InputMaybe<Scalars['String']>;
  /** The team these view preferences are associated with. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The type of view preferences (either user or organization level preferences). */
  type: ViewPreferencesType;
  /** The user profile these view preferences are associated with. */
  userId?: InputMaybe<Scalars['String']>;
  /** The view type of the view preferences are associated with. */
  viewType: ViewType;
};

export type ViewPreferencesPayload = {
  __typename?: 'ViewPreferencesPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The view preferences entity being mutated. */
  viewPreferences: ViewPreferences;
};

/** The type of view preferences (either user or organization level preferences). */
export enum ViewPreferencesType {
  Organization = 'organization',
  User = 'user'
}

export type ViewPreferencesUpdateInput = {
  /** View preferences. */
  preferences: Scalars['JSONObject'];
};

/** The client view this custom view is targeting. */
export enum ViewType {
  ActiveIssues = 'activeIssues',
  AllIssues = 'allIssues',
  Backlog = 'backlog',
  Board = 'board',
  CompletedCycle = 'completedCycle',
  CustomView = 'customView',
  Cycle = 'cycle',
  Inbox = 'inbox',
  Label = 'label',
  MyIssues = 'myIssues',
  Project = 'project',
  Projects = 'projects',
  Roadmap = 'roadmap',
  Triage = 'triage',
  UserProfile = 'userProfile'
}

/** A webhook used to send HTTP notifications over data updates */
export type Webhook = Node & {
  __typename?: 'Webhook';
  /** Whether the Webhook is enabled for all public teams, including teams created after the webhook was created. */
  allPublicTeams: Scalars['Boolean'];
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the webhook. */
  creator?: Maybe<User>;
  /** Whether the Webhook is enabled. */
  enabled: Scalars['Boolean'];
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Webhook label */
  label: Scalars['String'];
  /** The resource types this webhook is subscribed to. */
  resourceTypes: Array<Scalars['String']>;
  /** Secret token for verifying the origin on the recipient side. */
  secret?: Maybe<Scalars['String']>;
  /** The team that the webhook is associated with. */
  team: Team;
  /**
   * The ids of teams that the webhook is associated with.
   * @deprecated This field will no longer be used, and will return an empty array.
   */
  teamIds: Array<Scalars['String']>;
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
  /** Webhook URL */
  url?: Maybe<Scalars['String']>;
};

export type WebhookConnection = {
  __typename?: 'WebhookConnection';
  edges: Array<WebhookEdge>;
  nodes: Array<Webhook>;
  pageInfo: PageInfo;
};

export type WebhookCreateInput = {
  /** Whether this webhook is enabled for all public teams. */
  allPublicTeams?: InputMaybe<Scalars['Boolean']>;
  /** Whether this webhook is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** Label for the webhook. */
  label?: InputMaybe<Scalars['String']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes: Array<Scalars['String']>;
  /** An optional secret token used to sign the webhook payload. */
  secret?: InputMaybe<Scalars['String']>;
  /** The identifier or key of the team associated with the Webhook. */
  teamId?: InputMaybe<Scalars['String']>;
  /** The URL that will be called on data changes. */
  url: Scalars['String'];
};

export type WebhookEdge = {
  __typename?: 'WebhookEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: Webhook;
};

export type WebhookPayload = {
  __typename?: 'WebhookPayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The webhook entity being mutated. */
  webhook: Webhook;
};

export type WebhookUpdateInput = {
  /** Whether this webhook is enabled. */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** Label for the webhook. */
  label?: InputMaybe<Scalars['String']>;
  /** List of resources the webhook should subscribe to. */
  resourceTypes?: InputMaybe<Array<Scalars['String']>>;
  /** An optional secret token used to sign the Webhook payload. */
  secret?: InputMaybe<Scalars['String']>;
  /** The URL that will be called on data changes. */
  url?: InputMaybe<Scalars['String']>;
};

/** A state in a team workflow. */
export type WorkflowState = Node & {
  __typename?: 'WorkflowState';
  /** The time at which the entity was archived. Null if the entity has not been archived. */
  archivedAt?: Maybe<Scalars['DateTime']>;
  /** The state's UI color as a HEX string. */
  color: Scalars['String'];
  /** The time at which the entity was created. */
  createdAt: Scalars['DateTime'];
  /** Description of the state. */
  description?: Maybe<Scalars['String']>;
  /** The unique identifier of the entity. */
  id: Scalars['ID'];
  /** Issues belonging in this state. */
  issues: IssueConnection;
  /** The state's name. */
  name: Scalars['String'];
  /** The position of the state in the team flow. */
  position: Scalars['Float'];
  /** The team to which this state belongs to. */
  team: Team;
  /** The type of the state. */
  type: Scalars['String'];
  /**
   * The last time at which the entity was updated. This is the same as the creation time if the
   *     entity hasn't been update after creation.
   */
  updatedAt: Scalars['DateTime'];
};


/** A state in a team workflow. */
export type WorkflowStateIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<IssueFilter>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
};

export type WorkflowStateConnection = {
  __typename?: 'WorkflowStateConnection';
  edges: Array<WorkflowStateEdge>;
  nodes: Array<WorkflowState>;
  pageInfo: PageInfo;
};

export type WorkflowStateCreateInput = {
  /** The color of the state. */
  color: Scalars['String'];
  /** The description of the state. */
  description?: InputMaybe<Scalars['String']>;
  /** The identifier. If none is provided, the backend will generate one. */
  id?: InputMaybe<Scalars['String']>;
  /** The name of the state. */
  name: Scalars['String'];
  /** The position of the state. */
  position?: InputMaybe<Scalars['Float']>;
  /** The team associated with the state. */
  teamId: Scalars['String'];
  /** The workflow type. */
  type: Scalars['String'];
};

export type WorkflowStateEdge = {
  __typename?: 'WorkflowStateEdge';
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
  node: WorkflowState;
};

/** [Alpha] Workflow state filtering options. */
export type WorkflowStateFilter = {
  /** Compound filters, all of which need to be matched by the workflow state. */
  and?: InputMaybe<Array<WorkflowStateFilter>>;
  /** Comparator for the created at date. */
  createdAt?: InputMaybe<DateComparator>;
  /** Comparator for the workflow state description. */
  description?: InputMaybe<StringComparator>;
  /** Comparator for the identifier. */
  id?: InputMaybe<IdComparator>;
  /** Filters that the workflow states issues must satisfy. */
  issues?: InputMaybe<IssueCollectionFilter>;
  /** Comparator for the workflow state name. */
  name?: InputMaybe<StringComparator>;
  /** Compound filters, one of which need to be matched by the workflow state. */
  or?: InputMaybe<Array<WorkflowStateFilter>>;
  /** Comparator for the workflow state position. */
  position?: InputMaybe<NumberComparator>;
  /** Filters that the workflow states team must satisfy. */
  team?: InputMaybe<TeamFilter>;
  /** Comparator for the workflow state type. */
  type?: InputMaybe<StringComparator>;
  /** Comparator for the updated at date. */
  updatedAt?: InputMaybe<DateComparator>;
};

export type WorkflowStatePayload = {
  __typename?: 'WorkflowStatePayload';
  /** The identifier of the last sync operation. */
  lastSyncId: Scalars['Float'];
  /** Whether the operation was successful. */
  success: Scalars['Boolean'];
  /** The state that was created or updated. */
  workflowState: WorkflowState;
};

export type WorkflowStateUpdateInput = {
  /** The color of the state. */
  color?: InputMaybe<Scalars['String']>;
  /** The description of the state. */
  description?: InputMaybe<Scalars['String']>;
  /** The name of the state. */
  name?: InputMaybe<Scalars['String']>;
  /** The position of the state. */
  position?: InputMaybe<Scalars['Float']>;
};

/** Zendesk specific settings. */
export type ZendeskSettings = {
  __typename?: 'ZendeskSettings';
  /** The ID of the Linear bot user. */
  botUserId: Scalars['String'];
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String'];
};

export type ZendeskSettingsInput = {
  /** The ID of the Linear bot user. */
  botUserId: Scalars['String'];
  /** The subdomain of the Zendesk organization being connected. */
  subdomain: Scalars['String'];
  /** The URL of the connected Zendesk organization. */
  url: Scalars['String'];
};

export type TeamsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type TeamsQuery = { __typename?: 'Query', teams: { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', description?: string | null | undefined, name: string, key: string, id: string }> } };

export type TeamConnectionFragment = { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', description?: string | null | undefined, name: string, key: string, id: string }> };

export type TeamFragment = { __typename?: 'Team', description?: string | null | undefined, name: string, key: string, id: string };

export type User_AssignedIssuesQueryVariables = Exact<{
  id: Scalars['String'];
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type User_AssignedIssuesQuery = { __typename?: 'Query', user: { __typename?: 'User', assignedIssues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type GetIssueQueryVariables = Exact<{
  id: Scalars['String'];
  withComments: Scalars['Boolean'];
  historyCount: Scalars['Int'];
}>;


export type GetIssueQuery = { __typename?: 'Query', issue: { __typename?: 'Issue', archivedAt?: any | null | undefined, trashed?: boolean | null | undefined, url: string, identifier: string, createdAt: any, priorityLabel: string, previousIdentifiers: Array<string>, branchName: string, estimate?: number | null | undefined, description?: string | null | undefined, title: string, number: number, priority: number, id: string, history: { __typename?: 'IssueHistoryConnection', nodes: Array<{ __typename?: 'IssueHistory', createdAt: any, actor?: { __typename?: 'User', displayName: string } | null | undefined, fromState?: { __typename?: 'WorkflowState', id: string, name: string } | null | undefined }> }, comments?: { __typename?: 'CommentConnection', nodes: Array<{ __typename?: 'Comment', body: string, createdAt: any, user: { __typename?: 'User', displayName: string } }> }, project?: { __typename?: 'Project', name: string, id: string } | null | undefined, creator?: { __typename?: 'User', id: string, displayName: string } | null | undefined, cycle?: { __typename?: 'Cycle', id: string } | null | undefined, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', name: string, color: string }> }, parent?: { __typename?: 'Issue', id: string } | null | undefined, team: { __typename?: 'Team', id: string, name: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string, type: string, color: string, position: number }> } }, assignee?: { __typename?: 'User', id: string, name: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, type: string, color: string } } };

export type IssueConnectionFragment = { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> };

export type IssueFragment = { __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } };

export type GetIssueWorkflowStatesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetIssueWorkflowStatesQuery = { __typename?: 'Query', issue: { __typename?: 'Issue', identifier: string, id: string, team: { __typename?: 'Team', id: string, name: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string, type: string, color: string, position: number }> } }, assignee?: { __typename?: 'User', id: string, name: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, type: string, color: string } } };

export type IssuesQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
}>;


export type IssuesQuery = { __typename?: 'Query', issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } };

export type TeamIssuesQueryVariables = Exact<{
  teamId: Scalars['String'];
  first: Scalars['Int'];
}>;


export type TeamIssuesQuery = { __typename?: 'Query', team: { __typename?: 'Team', name: string, issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type StatusIssuesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type StatusIssuesQuery = { __typename?: 'Query', workflowState: { __typename?: 'WorkflowState', issues: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', url: string, identifier: string, title: string, createdAt: any, updatedAt: any, priority: number, priorityLabel: string, id: string, parent?: { __typename?: 'Issue', id: string } | null | undefined, project?: { __typename?: 'Project', id: string } | null | undefined, team: { __typename?: 'Team', id: string, key: string }, assignee?: { __typename?: 'User', id: string, displayName: string } | null | undefined, state: { __typename?: 'WorkflowState', id: string, name: string, color: string, type: string }, labels: { __typename?: 'IssueLabelConnection', nodes: Array<{ __typename?: 'IssueLabel', id: string, name: string, color: string }> } }> } } };

export type IssueSearchQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  includeArchived?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PaginationOrderBy>;
  query: Scalars['String'];
}>;


export type IssueSearchQuery = { __typename?: 'Query', issueSearch: { __typename?: 'IssueConnection', nodes: Array<{ __typename?: 'Issue', id: string, title: string, identifier: string }> } };

export type TeamWorkflowStatesQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamWorkflowStatesQuery = { __typename?: 'Query', teams: { __typename?: 'TeamConnection', nodes: Array<{ __typename?: 'Team', id: string, name: string, key: string, states: { __typename?: 'WorkflowStateConnection', nodes: Array<{ __typename?: 'WorkflowState', id: string, name: string }> } }> } };
