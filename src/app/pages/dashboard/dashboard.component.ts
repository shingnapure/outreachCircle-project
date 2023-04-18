import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apollo:Apollo,
              private cookies:CookieService,
              private service:DataService) { }

  aliasID:string=''
  ngOnInit(): void {
    this.fetchAlias()
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
        `
      ,
        variables:{
          "alias": "FIB978"
        },
        context: {
          headers: { Authorization: this.cookies.get(this.service.token) },
        },
      })
      .subscribe((data) => {
        this.aliasID=data.data.outreachCircleByAlias.id
         console.log("Alias",data.data.outreachCircleByAlias.id);
         
      });
  }
}
