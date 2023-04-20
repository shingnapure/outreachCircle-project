import { ChangeDetectorRef, Component,  OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";
import { CookieService } from "ngx-cookie-service";
import { CreateGroupModelComponent } from "src/app/component/create-group-model/create-group-model.component";
import { allGroup } from "src/app/graphql/graphql.query";
import { DataService } from "src/app/services/data.service";
import { Groups } from "src/app/services/interface";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.css"],
})
export class GroupsComponent implements OnInit  {
  href:string=''
  groupID:string=''
  group: boolean = false;
  actionLoading: boolean = false;
  groupLoading: boolean = false;
  groupData: any;
  individaulGroupId: string = "";
  searchText:string=''
  aliasID:string=''
  constructor(
    private apollo: Apollo,
    private service: DataService,
    private cookies: CookieService,
    private router:Router,
    private dialog:MatDialog,
    private cdRef:ChangeDetectorRef

  ) {}

  

  openDialog(){
    this.dialog.open(CreateGroupModelComponent)
  }
  ngOnInit(): void {
    this.href=(this.router.url).split("/")[2]
    console.log("HREF",this.href);
    this.fetchAlias()
    // this.groupID=this.href.split("/")[4]
    //  this.fetchGroups();

  }
  fetchAlias(){
    this.apollo
    .query<any>({
      query: gql`query outreachCircleByAlias($alias: String!) {
        outreachCircleByAlias(alias: $alias) {
          id
          name
          industry
          category
          city
          state
          country
          currentAdminInfo {
            hasReadOnlyAccessToOutreachCircle
            __typename
          }
          keyDates {
            id
            name
            date
            isApplicable
            isSystemAdded
            __typename
          }
          status {
            createdAndActivate
            setup {
              isAudienceCreated
              isActionCreated
              hasSupporter
              __typename
            }
            __typename
          }
          logo {
            id
            url
            fileName
            fileSize
            created
            __typename
          }
          zip
          code {
            id
            value
            isCode
            isRapidOnboardingEnabled
            languagePreference
            isAppOnly
            shortURL
            __typename
          }
          phoneNumber
          candidate {
            id
            enabled
            firstName
            lastName
            image {
              id
              url
              __typename
            }
            __typename
          }
          introduction
          disclaimer
          admins {
            id
            created
            userRole
            email
            joinedOn
            isEmailBounced
            __typename
          }
          activeAdminCount
          currentAdminInfo {
            id
            isAddedByOrganization
            isAddedByOutreachCircle
            hasReadOnlyAccessToOutreachCircle
            __typename
          }
          referredBy
          isPublic
          audience {
            id
            __typename
          }
          plan
          product
          productPlanInfo {
            canChangeVisibility
            canIntegrateVAN
            hasOneWayVANIntegration
            hasTwoWayVANIntegration
            canCreateSurveys
            canCustomizeActionNotification
            canGenerateReports
            canScheduleActions
            canImportVoterFile
            canRemoveBranding
            canAddUniqueTrackingLinks
            voterFileLimit
            uniqueTrackingLinksLimit
            canCreateAliasNameOnReminders
            invitedSupportersLimit
            canFilterVoter
            canTextAList
            canIntegrateEveryAction
            canCreateGroup
            canIntegratePhone2ActionForm
            canCreateSupporterForms
            canIntegrateNationBuilder
            canIntegrateFacebookPixel
            canIntegratePDI
            canLinkActionTags
            canCreateP2PAction
            canCreateSearchAndSurveyAction
            canAssignSupportersToAnyAction
            canIntegrateSalesforce
            canIntegrateGoogleBigQuery
            canCreateGrassRootOrganizingAction
            canCreateGRORelationalAction
            canIntegrateTCR
            __typename
          }
          trialDaysLeft
          supporterCount
          supporting
          supporterReplyToEmail
          aliasCount
          actionCount
          groupsCount
          additionalDetails {
            allowCampaigns
            supporterSettings {
              supporterAutoEmailsFromName
              __typename
            }
            whileLabelInfo {
              isWhiteLabeled
              appName
              appLogoURL
              isWhiteLabeledOrg
              __typename
            }
            headquarterInfo {
              latitude
              longitude
              __typename
            }
            p2pConfig {
              isP2PActionEnabled
              isA2P10DLCRegistrationComplete
              architecture
              __typename
            }
            canIntegrateSalesforce
            specialActionsAllowed
            __typename
          }
          facebookPixelCode
          integrations {
            aggregateTotal
            items {
              type
              __typename
            }
            __typename
          }
          tags {
            total
            __typename
          }
          currentAdminInfo {
            id
            isAddedByOrganization
            isAddedByOutreachCircle
            hasReadOnlyAccessToOutreachCircle
            __typename
          }
          blockedDomains
          created
          hasAnyTagBeenApplied
          __typename
        }
      }
    `,
      variables:{
         alias: this.href
      },
      context: {
        headers: { Authorization: this.cookies.get(this.service.token) },
      },
    })
    .subscribe((data) => {
      this.aliasID=data.data.outreachCircleByAlias.id
      this.fetchGroups()
       console.log("Alias",data.data.outreachCircleByAlias.id);
       
    });
  }
  fetchGroups() {
    this.groupLoading = true;

    this.apollo
      .query<Groups>({
        query: allGroup,
        variables: {
          input: {
            outreachCircleId: this.aliasID,
            skip: 0,
            limit: 10000000,
            sortBy: [
              {
                sortField: "Name",
                isAscending: true,
              },
            ],
          },
        },
        context: {
          headers: { Authorization: this.cookies.get(this.service.token) },
        },
      })
      .subscribe((data) => {
        this.groupData = data.data.getGroupsByOutreachCircle.items;
        setTimeout(()=>{
          this.groupLoading = false;
        },1000)
        console.log("All Groups",this.groupData)
      });
  }
  handleGroup(index: string) {
    this.individaulGroupId = index;
    this.actionLoading = false;
    this.cdRef.detectChanges()
    this.actionLoading = true;

  }
  
  

  getData(value: boolean) {
    this.actionLoading = value;
  }

  
}
