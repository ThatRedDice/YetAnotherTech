declare module "org.apache.maven.artifact.repository.ArtifactRepository" {
import {$ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$$Type} from "org.apache.maven.artifact.repository.ArtifactRepositoryPolicy"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"
import {$Proxy, $Proxy$$Type} from "org.apache.maven.repository.Proxy"
import {$ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import {$ArtifactRepositoryLayout, $ArtifactRepositoryLayout$$Type} from "org.apache.maven.artifact.repository.layout.ArtifactRepositoryLayout"
import {$Authentication, $Authentication$$Type} from "org.apache.maven.artifact.repository.Authentication"

export interface $ArtifactRepository$$Interface {
set "blocked"(value: boolean)
get "blacklisted"(): boolean
get "basedir"(): StringJS
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
set "blacklisted"(value: boolean)
get "projectAware"(): boolean
set "authentication"(value: $Authentication$$Type)
get "authentication"(): $Authentication
get "mirroredRepositories"(): $List<($ArtifactRepository)>
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
get "uniqueVersion"(): boolean
set "proxy"(value: $Proxy$$Type)
get "key"(): StringJS
get "id"(): StringJS
get "protocol"(): StringJS
get "url"(): StringJS
get "layout"(): $ArtifactRepositoryLayout
set "layout"(value: $ArtifactRepositoryLayout$$Type)
set "id"(value: StringJS)
get "releases"(): $ArtifactRepositoryPolicy
get "snapshots"(): $ArtifactRepositoryPolicy
get "proxy"(): $Proxy
get "blocked"(): boolean
set "url"(value: StringJS)
}

export class $ArtifactRepository implements $ArtifactRepository$$Interface {
 "setBlocked"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): StringJS
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): StringJS
 "getBasedir"(): StringJS
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "findVersions"(arg0: $Artifact$$Type): $List<(StringJS)>
 "isProjectAware"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "getAuthentication"(): $Authentication
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "setProxy"(arg0: $Proxy$$Type): void
 "getKey"(): StringJS
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): StringJS
 "getProtocol"(): StringJS
 "getUrl"(): StringJS
 "getLayout"(): $ArtifactRepositoryLayout
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "setId"(arg0: StringJS): void
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getProxy"(): $Proxy
 "isBlocked"(): boolean
 "setUrl"(arg0: StringJS): void
 "pathOf"(arg0: $Artifact$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepository$$Type = ($ArtifactRepository);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactRepository$$Original = $ArtifactRepository;}
declare module "org.apache.maven.artifact.resolver.filter.ArtifactFilter" {
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export interface $ArtifactFilter$$Interface {

(arg0: $Artifact): boolean
}

export class $ArtifactFilter implements $ArtifactFilter$$Interface {
 "include"(arg0: $Artifact$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactFilter$$Type = ((arg0: $Artifact) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactFilter$$Original = $ArtifactFilter;}
declare module "org.apache.maven.artifact.versioning.Restriction" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$$Type, arg1: boolean, arg2: $ArtifactVersion$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "getLowerBound"(): $ArtifactVersion
public "getUpperBound"(): $ArtifactVersion
public "isLowerBoundInclusive"(): boolean
public "isUpperBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
get "lowerBoundInclusive"(): boolean
get "upperBoundInclusive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Restriction$$Type = ($Restriction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Restriction$$Original = $Restriction;}
declare module "org.apache.maven.artifact.Artifact" {
import {$ArtifactFilter, $ArtifactFilter$$Type} from "org.apache.maven.artifact.resolver.filter.ArtifactFilter"
import {$ArtifactRepository, $ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$Pattern} from "java.util.regex.Pattern"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Collection} from "java.util.Collection"
import {$File, $File$$Type} from "java.io.File"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$ArtifactHandler, $ArtifactHandler$$Type} from "org.apache.maven.artifact.handler.ArtifactHandler"
import {$List, $List$$Type} from "java.util.List"
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$ArtifactMetadata, $ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"

export interface $Artifact$$Interface extends $Comparable$$Interface<($Artifact)> {
get "downloadUrl"(): StringJS
get "release"(): boolean
set "scope"(value: StringJS)
get "baseVersion"(): StringJS
set "baseVersion"(value: StringJS)
get "dependencyConflictId"(): StringJS
get "metadataList"(): $Collection<($ArtifactMetadata)>
set "repository"(value: $ArtifactRepository$$Type)
set "downloadUrl"(value: StringJS)
get "dependencyFilter"(): $ArtifactFilter
set "dependencyFilter"(value: $ArtifactFilter$$Type)
get "artifactHandler"(): $ArtifactHandler
set "dependencyTrail"(value: $List$$Type<(StringJS)>)
set "versionRange"(value: $VersionRange$$Type)
set "artifactId"(value: StringJS)
set "resolved"(value: boolean)
set "resolvedVersion"(value: StringJS)
set "artifactHandler"(value: $ArtifactHandler$$Type)
get "availableVersions"(): $List<($ArtifactVersion)>
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
set "optional"(value: boolean)
get "snapshot"(): boolean
get "repository"(): $ArtifactRepository
set "version"(value: StringJS)
get "id"(): StringJS
get "type"(): StringJS
get "scope"(): StringJS
get "resolved"(): boolean
set "release"(value: boolean)
get "file"(): $File
get "version"(): StringJS
set "file"(value: $File$$Type)
get "selectedVersion"(): $ArtifactVersion
get "selectedVersionKnown"(): boolean
get "groupId"(): StringJS
get "artifactId"(): StringJS
get "classifier"(): StringJS
get "dependencyTrail"(): $List<(StringJS)>
get "versionRange"(): $VersionRange
get "optional"(): boolean
set "groupId"(value: StringJS)
}

export class $Artifact implements $Artifact$$Interface {
static readonly "VERSION_FILE_PATTERN": $Pattern
static readonly "SCOPE_RUNTIME": StringJS
static readonly "SCOPE_TEST": StringJS
static readonly "SCOPE_RUNTIME_PLUS_SYSTEM": StringJS
static readonly "SCOPE_IMPORT": StringJS
static readonly "SCOPE_PROVIDED": StringJS
static readonly "RELEASE_VERSION": StringJS
static readonly "SCOPE_SYSTEM": StringJS
static readonly "SNAPSHOT_VERSION": StringJS
static readonly "SCOPE_COMPILE": StringJS
static readonly "SCOPE_COMPILE_PLUS_RUNTIME": StringJS
static readonly "LATEST_VERSION": StringJS

 "getDownloadUrl"(): StringJS
 "isRelease"(): boolean
 "setScope"(arg0: StringJS): void
 "getBaseVersion"(): StringJS
 "hasClassifier"(): boolean
 "setBaseVersion"(arg0: StringJS): void
 "getDependencyConflictId"(): StringJS
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "updateVersion"(arg0: StringJS, arg1: $ArtifactRepository$$Type): void
 "setDownloadUrl"(arg0: StringJS): void
 "getDependencyFilter"(): $ArtifactFilter
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getArtifactHandler"(): $ArtifactHandler
 "setDependencyTrail"(arg0: $List$$Type<(StringJS)>): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "selectVersion"(arg0: StringJS): void
 "setArtifactId"(arg0: StringJS): void
 "setResolved"(arg0: boolean): void
 "setResolvedVersion"(arg0: StringJS): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "setOptional"(arg0: boolean): void
 "isSnapshot"(): boolean
 "getRepository"(): $ArtifactRepository
 "setVersion"(arg0: StringJS): void
 "getId"(): StringJS
 "getType"(): StringJS
 "getScope"(): StringJS
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): StringJS
 "setFile"(arg0: $File$$Type): void
 "getSelectedVersion"(): $ArtifactVersion
 "isSelectedVersionKnown"(): boolean
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
 "getClassifier"(): StringJS
 "getDependencyTrail"(): $List<(StringJS)>
 "getVersionRange"(): $VersionRange
 "isOptional"(): boolean
 "setGroupId"(arg0: StringJS): void
 "compareTo"(arg0: $Artifact$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Artifact$$Type = ($Artifact);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Artifact$$Original = $Artifact;}
declare module "org.apache.maven.artifact.versioning.VersionRange" {
import {$Restriction} from "org.apache.maven.artifact.versioning.Restriction"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export class $VersionRange {
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
public "getRestrictions"(): $List<($Restriction)>
public static "createFromVersion"(arg0: StringJS): $VersionRange
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "hasRestrictions"(): boolean
public static "createFromVersionSpec"(arg0: StringJS): $VersionRange
get "recommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<($Restriction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionRange$$Type = ($VersionRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VersionRange$$Original = $VersionRange;}
declare module "org.apache.maven.artifact.handler.ArtifactHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ArtifactHandler$$Interface {
get "packaging"(): StringJS
get "addedToClasspath"(): boolean
get "includesDependencies"(): boolean
get "extension"(): StringJS
get "language"(): StringJS
get "classifier"(): StringJS
get "directory"(): StringJS
}

export class $ArtifactHandler implements $ArtifactHandler$$Interface {
static readonly "ROLE": StringJS

 "getPackaging"(): StringJS
 "isAddedToClasspath"(): boolean
 "isIncludesDependencies"(): boolean
 "getExtension"(): StringJS
 "getLanguage"(): StringJS
 "getClassifier"(): StringJS
 "getDirectory"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactHandler$$Type = ($ArtifactHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactHandler$$Original = $ArtifactHandler;}
declare module "org.apache.maven.artifact.metadata.ArtifactMetadata" {
import {$ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactMetadata$$Type as $ArtifactMetadata$0$$Type, $ArtifactMetadata$$Interface as $ArtifactMetadata$0$$Interface} from "org.apache.maven.repository.legacy.metadata.ArtifactMetadata"

/**
 * 
 * @deprecated
 */
export interface $ArtifactMetadata$$Interface extends $ArtifactMetadata$0$$Interface {
get "baseVersion"(): StringJS
get "remoteFilename"(): StringJS
get "key"(): any
get "groupId"(): StringJS
get "artifactId"(): StringJS
}

export class $ArtifactMetadata implements $ArtifactMetadata$$Interface {
 "merge"(arg0: $ArtifactMetadata$$Type): void
 "storedInArtifactVersionDirectory"(): boolean
 "storedInGroupDirectory"(): boolean
 "getBaseVersion"(): StringJS
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): StringJS
 "getRemoteFilename"(): StringJS
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "extendedToString"(): StringJS
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$$Type = ($ArtifactMetadata);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactMetadata$$Original = $ArtifactMetadata;}
declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export interface $ArtifactVersion$$Interface extends $Comparable$$Interface<($ArtifactVersion)> {
get "majorVersion"(): integer
get "minorVersion"(): integer
get "incrementalVersion"(): integer
get "buildNumber"(): integer
get "qualifier"(): StringJS
}

export class $ArtifactVersion implements $ArtifactVersion$$Interface {
 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getIncrementalVersion"(): integer
 "getBuildNumber"(): integer
 "getQualifier"(): StringJS
 "parseVersion"(arg0: StringJS): void
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactVersion$$Type = ($ArtifactVersion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArtifactVersion$$Original = $ArtifactVersion;}
